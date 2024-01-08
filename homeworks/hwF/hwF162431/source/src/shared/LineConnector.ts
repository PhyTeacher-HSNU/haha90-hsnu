import { BufferGeometry, Line, LineBasicMaterial, Object3D } from 'three';

export class LineConnector extends Line {
  constructor(public readonly objects: Object3D[], public readonly color: number) {
    const geometry = new BufferGeometry().setFromPoints(objects.map((o) => o.position));
    super(geometry, new LineBasicMaterial({ color }));
  }

  onBeforeRender() {
    for (let i = 0; i < this.objects.length; i++) {
      const obj = this.objects[i];
      this.geometry.attributes.position.array[i * 3] = obj.position.x;
      this.geometry.attributes.position.array[i * 3 + 1] = obj.position.y;
      this.geometry.attributes.position.array[i * 3 + 2] = obj.position.z;
    }
    this.geometry.attributes.position.needsUpdate = true;
  }
}
