import React from "react";
import * as THREE from "three";
import { useDrag } from "react-use-gesture";
import { useThree } from "react-three-fiber";

export function KeyStoke({ keyStroke, selectedFont }) {
  const font = new THREE.FontLoader().parse(selectedFont);

  const [color, setColor] = React.useState("");
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

  React.useEffect(() => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    setColor(`rgb(${r},${g},${b})`);
  }, []);

  const textOptions = {
    font,
    size: 1.5,
    height: 0.5,
  };
  return (
    <mesh
      castShadow
      receiveShadow
      position={position}
      {...bind()}
      rotation={[0, 0.3, 0]}
    >
      <textGeometry attach="geometry" args={[keyStroke, textOptions]} />
      <meshStandardMaterial color={color} attach="material" />
    </mesh>
  );
}
