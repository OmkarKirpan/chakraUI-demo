import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
