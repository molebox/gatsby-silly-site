import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Box } from "@chakra-ui/react";

/**
 * A container with a set width to hold the canvas.
 * @param {String} width - The width of containing element
 * @param {String} height - The height of containing element
 * @param {Array}  position - The position of the camera, [x, y, z] axis.
 * @param {Number} fov - The field of view of the camera. The higher the number, the further away the view
 * @param {Number} zoom - If the camera should be zoomed in. Provide a number. Defaults to 1.
 * ...rest = any styles you want to apply to the containing div
 */
const CanvasContainer = ({
  width,
  height,
  position,
  fov,
  zoom,
  children,
  ...rest
}) => {
  return (
    <Box height={height} width={width} {...rest}>
      <Canvas
        shadowMap
        colorManagement
        camera={{
          position,
          fov,
          zoom,
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </Box>
  );
};

export default CanvasContainer;
