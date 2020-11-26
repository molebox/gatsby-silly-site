import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useDrag } from "react-use-gesture";
import { useThree } from "react-three-fiber";

const DistortBlob = ({ distort, speed, color }) => {
  const [position, setPosition] = React.useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const [blobDistort, setBlobDistort] = React.useState(distort);
  const [blobSpeed, setBlobSpeed] = React.useState(speed);
  const [blobColor, setBlobColor] = React.useState(color);

  React.useEffect(() => {
    setBlobDistort(distort);
    setBlobSpeed(speed);
    setBlobColor(color);
  }, [blobDistort, blobSpeed, blobColor]);

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  return (
    <Sphere {...bind()} visible position={position} args={[1, 16, 200]}>
      <MeshDistortMaterial
        color={blobColor}
        attach="material"
        distort={blobDistort} // Strength, 0 disables the effect (default=1)
        speed={blobSpeed} // Speed (default=1)
        roughness={0}
      />
    </Sphere>
  );
};

export default DistortBlob;
