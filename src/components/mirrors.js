import React, { useState } from "react";
import { useResource } from "react-three-fiber";

export function Mirrors({ envMap }) {
  const sideMaterial = useResource();
  const reflectionMaterial = useResource();
  const [thinFilmFresnelMap] = useState(new thinFilmFresnelMap());

  return (
    <>
      <meshLambertMaterial
        ref={sideMaterial}
        map={thinFilmFresnelMap}
        color={0xaaaaaa}
      />
      <meshLambertMaterial
        ref={reflectionMaterial}
        map={thinFilmFresnelMap}
        envMap={envMap}
      />

      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          {...mirror}
          sideMaterial={sideMaterial.current}
          reflectionMaterial={reflectionMaterial.current}
        />
      ))}
    </>
  );
}
