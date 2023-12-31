// components/RandomGeometries.js
import React, { useMemo } from 'react';
import { Float } from '@react-three/drei';
import { MathUtils } from 'three';
import * as THREE from 'three';

const material = new THREE.MeshStandardMaterial();
const geometries = [
  { geometry: new THREE.TetrahedronBufferGeometry(2) },
  { geometry: new THREE.CylinderBufferGeometry(0.8, 0.8, 2, 32) },
  { geometry: new THREE.ConeGeometry(1.1, 1.7, 32) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.IcosahedronBufferGeometry(2) },
  { geometry: new THREE.TorusBufferGeometry(1.1, 0.35, 16, 32) },
  { geometry: new THREE.OctahedronGeometry(2) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.BoxBufferGeometry(2.5, 2.5, 2.5) }
];

function RandomGeometries() {
  const n = 40;
  const randProps = useMemo(() => Array.from({ length: n }, () => geometries[Math.floor(Math.random() * geometries.length)]), []);
  return randProps.map((prop, index) => (
    <Float key={index}>
      <mesh
        scale={MathUtils.randFloat(0.25, 0.5)}
        position={[MathUtils.randFloat(-8, 8), MathUtils.randFloat(-8, 8), MathUtils.randFloat(-8, 8)]}
        geometry={prop.geometry}
        material={material}
      />
    </Float>
  ));
}

export default RandomGeometries;
