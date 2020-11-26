import React, { useMemo } from "react";
import { useSphere } from "@react-three/cannon";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import niceColors from "nice-color-palettes";

export function Spheres({ number }) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: [1, 16, 200],
    position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
  }));

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new THREE.Color();
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[17][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    return array;
  }, [number]);

  useFrame(() =>
    api
      .at(Math.floor(Math.random() * number))
      .position.set(0, Math.random() * 2, 0)
  );

  return (
    <instancedMesh
      receiveShadow
      castShadow
      ref={ref}
      args={[null, null, number]}
    >
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute
          attachObject={["attributes", "color"]}
          args={[colors, 3]}
        />
      </boxBufferGeometry>
      <meshLambertMaterial
        attach="material"
        vertexColors={THREE.VertexColors}
      />
    </instancedMesh>
  );
}
