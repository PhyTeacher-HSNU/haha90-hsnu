import { Camera, Object3D, Raycaster, Scene, Vector2 } from 'three';

export function getMouseOverObject(event: MouseEvent | PointerEvent, scene: Scene, camera: Camera): Object3D | null {
  const mouse = new Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);
  if (intersects.length > 0) {
    return intersects[0].object;
  }
  return null;
}
