import React from 'react'
import { ChakraProvider} from "@chakra-ui/react";
import theme from './src/theme';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider resetCSS theme={theme}>
    {element}
  </ChakraProvider>
)