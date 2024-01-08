import { Collider, ColliderDesc, RigidBody, RigidBodyDesc, RigidBodyType, World } from '@dimforge/rapier3d-compat';
import { BoxGeometry, BufferGeometry, CapsuleGeometry, CylinderGeometry, Euler, Material, Mesh, Quaternion, Scene, SphereGeometry } from 'three';

export class PhysicsMesh extends Mesh {
  public readonly rigidBodyDesc: RigidBodyDesc;
  public readonly colliderDescs: ColliderDesc[];
  public rigidBody!: RigidBody;
  public colliders!: Collider[];
  constructor(type: RigidBodyType, geometry: BufferGeometry, material: Material, forceGeometryType?: 'box' | 'sphere') {
    super(geometry, material);
    this.onBeforeRender = this.updatePositionRotation;
    this.rigidBodyDesc = new RigidBodyDesc(type).setCanSleep(false);
    if (geometry instanceof BoxGeometry || forceGeometryType === 'box') {
      geometry.computeBoundingBox();
      const { min, max } = geometry.boundingBox!;
      const width = max.x - min.x;
      const height = max.y - min.y;
      const depth = max.z - min.z;
      this.colliderDescs = [ColliderDesc.cuboid(width / 2, height / 2, depth / 2)];
    } else if (geometry instanceof SphereGeometry || forceGeometryType === 'sphere') {
      geometry.computeBoundingSphere();
      const { radius } = geometry.boundingSphere!;
      this.colliderDescs = [ColliderDesc.ball(radius)];
    } else if (geometry instanceof CapsuleGeometry) {
      const { radius, length } = geometry.parameters;
      this.colliderDescs = [ColliderDesc.capsule(length / 2, radius)];
    } else if (geometry instanceof CylinderGeometry && isFullCylinder(geometry)) {
      const { radiusTop, height } = geometry.parameters;
      this.colliderDescs = [ColliderDesc.cylinder(height / 2, radiusTop)];
    } else {
      const indexArray = geometry.getIndex()?.array;
      const positionArray = geometry.getAttribute('position')?.array!;
      if (indexArray) {
        this.colliderDescs = [ColliderDesc.trimesh(new Float32Array(positionArray), new Uint32Array(indexArray))];
      } else {
        const indexArray2 = new Uint32Array(positionArray.length).map((_, i) => i);
        this.colliderDescs = [ColliderDesc.trimesh(new Float32Array(positionArray), indexArray2)];
      }
    }
  }
  updatePositionRotation() {
    if (this.rigidBody) {
      const { x, y, z } = this.rigidBody.translation();
      this.position.set(x, y, z);
      const { x: qx, y: qy, z: qz, w: qw } = this.rigidBody.rotation();
      this.quaternion.set(qx, qy, qz, qw);
    }
  }

  addToWorld(world: World, scene: Scene) {
    this.rigidBody = world.createRigidBody(this.rigidBodyDesc);
    this.colliders = this.colliderDescs.map((desc) => world.createCollider(desc, this.rigidBody));
    scene.add(this);
    return this;
  }
  removeFromWorld(world: World, scene: Scene) {
    world.removeRigidBody(this.rigidBody);
    // this.colliders.forEach((collider) => world.removeCollider(collider, false));
    scene.remove(this);
    this.rigidBody = null!;
    return this;
  }
  setPosition(x: number, y: number, z: number) {
    this.rigidBodyDesc.setTranslation(x, y, z);
    this.position.set(x, y, z);
    return this;
  }
  setRotation(x: number, y: number, z: number) {
    const quaternion = new Quaternion().setFromEuler(new Euler(x, y, z));
    this.rigidBodyDesc.setRotation(quaternion);
    this.quaternion.copy(quaternion);
    return this;
  }
  setVelocity(x: number, y: number, z: number) {
    this.rigidBodyDesc.setLinvel(x, y, z);
    return this;
  }
  setAngularVelocity(x: number, y: number, z: number) {
    this.rigidBodyDesc.setAngvel({ x, y, z });
    return this;
  }
  setDamping(damping: number) {
    this.rigidBodyDesc.setLinearDamping(damping);
    return this;
  }
  setAngularDamping(angularDamping: number) {
    this.rigidBodyDesc.setAngularDamping(angularDamping);
    return this;
  }
  setDensity(density: number) {
    this.colliderDescs.forEach((colliderDesc) => {
      colliderDesc.setDensity(density);
    });
    return this;
  }
  setFriction(friction: number) {
    this.colliderDescs.forEach((colliderDesc) => {
      colliderDesc.setFriction(friction);
    });
    return this;
  }
  setRestitution(restitution: number) {
    this.colliderDescs.forEach((colliderDesc) => {
      colliderDesc.setRestitution(restitution);
    });
    return this;
  }
  setAdditionalMass(mass: number) {
    this.rigidBodyDesc.setAdditionalMass(mass);
    return this;
  }
}

function isFullCylinder(geometry: CylinderGeometry) {
  const { radiusTop, radiusBottom, thetaStart, thetaLength } = geometry.parameters;
  return radiusTop === radiusBottom && thetaStart === 0 && thetaLength === Math.PI * 2;
}
