import React from "react";

/**
 * The plane which the cubes fall onto
 */
const Plane = () => {
  // We rotate the plane so that its like a wall seeing as we are sending the cubes down from above
  return (
    <mesh receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <shadowMaterial attach="material" opacity={0.5} color="plum" />
    </mesh>
  );
};

export default Plane;
