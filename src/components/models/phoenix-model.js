/*
auto-generated by: https://github.com/pmndrs/gltfjsx
author: NORBERTO-3D (https://sketchfab.com/norberto3d)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
title: phoenix bird
*/
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei/useGLTF";
import * as THREE from "three";
import { useThree } from "react-three-fiber";
import { useDrag } from "react-use-gesture";

// https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function PhoenixModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/phoenix/scene.gltf");

  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());

  const [position, setPosition] = React.useState([0, 0, -2]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = {
      Take_001: mixer.clipAction(animations[0], group.current),
    };
    actions.current.Take_001.play();
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, []);
  return (
    <group
      ref={group}
      scale={[0.01, 0.01, 0.01]}
      rotation={[-1, 0, 0]}
      {...bind()}
      position={position}
      {...props}
      dispose={null}
    >
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        userData={{ name: "RootNode (gltf orientation matrix)" }}
      >
        <group
          position={[-0.62, 17.14, 0]}
          rotation={[0, 0, 0.05]}
          userData={{ name: "RootNode (model correction matrix)" }}
        >
          <group
            rotation={[Math.PI / 2, 0, 0]}
            userData={{ name: "5f59736c86d4457fa045aec4aea6b7e0.fbx" }}
          >
            <group userData={{ name: "RootNode" }}>
              <primitive object={nodes._rootJoint} />
              <skinnedMesh
                material={materials.MatI_Ride_FengHuang_01a}
                geometry={
                  nodes.AMesh_Ride_FengHuang_01_MatI_Ride_FengHuang_01a_0
                    .geometry
                }
                skeleton={
                  nodes.AMesh_Ride_FengHuang_01_MatI_Ride_FengHuang_01a_0
                    .skeleton
                }
              />
              <skinnedMesh
                material={materials.MatI_Ride_FengHuang_01b}
                geometry={
                  nodes.AMesh_Ride_FengHuang_01_MatI_Ride_FengHuang_01b_0
                    .geometry
                }
                skeleton={
                  nodes.AMesh_Ride_FengHuang_01_MatI_Ride_FengHuang_01b_0
                    .skeleton
                }
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/phoenix/scene.gltf");
