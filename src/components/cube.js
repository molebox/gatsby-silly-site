import React from "react";
import { useBox } from "@react-three/cannon";

/**
 * A single 3D cube
 */
const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    mass: 0.5,
    position,
    rotation: [0.2, 0.5, 0.4],
    args: [1, 1, 1],
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial attach="material" map={texture} shininess={600} />
    </mesh>
  );
};

export default Cube;
