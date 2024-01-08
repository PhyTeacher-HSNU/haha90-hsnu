import { AmbientLight, Color, DirectionalLight, Material, Mesh, MeshStandardMaterial, PlaneGeometry, type Scene } from 'three';

export function setupBaseScene(scene: Scene) {
  scene.background = new Color(0xe1f6ff);
  //scene.fog = new Fog( 0xa0a0a0, 10, 50 );

  const ambientLight = new AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const dirLight = new DirectionalLight(0xffffff, 3);
  dirLight.position.set(10, 20, 10);
  dirLight.target.position.set(0, 0, 0);
  scene.add(dirLight, dirLight.target);

  const groundMesh = new Mesh(new PlaneGeometry(100, 100), new MeshStandardMaterial({ color: 0xa0a0a0, roughness: 0.75 }));
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);
}

// https://discourse.threejs.org/t/when-to-dispose-how-to-completely-clean-up-a-three-js-scene/1549/11
export function clearScene(scene: Scene) {
  scene.traverse((object) => {
    if (object instanceof Mesh) {
      object.geometry.dispose();
      if (object.material instanceof Material) {
        clearMaterialTextures(object.material);
        object.material.dispose();
      } else {
        (object.material as Material[]).forEach((material) => {
          clearMaterialTextures(material);
          material.dispose();
        });
      }
    }
    if ('dispose' in object && typeof object.dispose === 'function') {
      object.dispose();
    }
  });
  scene.clear();
}

function clearMaterialTextures(material: Material) {
  material.dispose();
  // dispose textures
  for (const key of Object.keys(material) as Array<keyof Material>) {
    const value = material[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose();
    }
  }
}
