import React from "react";
import { useTexture } from "@react-three/drei";

const Sticker = ({ texture }) => {
  const [stickerTexture] = useTexture(["/stevie-kanye.png"]);
  console.log({ stickerTexture });
  return (
    <mesh visible position={[0, 0, 0]}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" map={stickerTexture} />
    </mesh>
  );
};

export default Sticker;
