import React from "react";
import { Html } from "@react-three/drei";
import { useDrag } from "react-use-gesture";
import { useThree } from "react-three-fiber";
import { Image } from "@chakra-ui/react";

const Sticker = ({ imagePath }) => {
  const [position, setPosition] = React.useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  return (
    <Html
      style={{
        position: "relative",
        height: 100,
        width: 100,
      }}
      position={position}
    >
      <Image position="relative" {...bind()} src={imagePath} />
    </Html>
    // <mesh visible castShadow receiveShadow {...bind()} position={position}>
    //   <boxGeometry attach="geometry" args={[1, 1, 1]} />
    //   <meshStandardMaterial attach="material" map={texture} />
    // </mesh>
  );
};

export default Sticker;
