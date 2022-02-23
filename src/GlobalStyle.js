import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    //box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    height: 100%;
    width: 100%;
    background-color: yellow;
  }
`;