import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import theming from './styles/extendTheme'
const config = {
  initialColorMode: "dark"
}

const { colors } = theming


const theme = extendTheme({ colors, config })

ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
