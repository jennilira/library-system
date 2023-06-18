import { createGlobalStyle, } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    position:relative;

    height: 100vh;
    /* position: relative;
    justify-content: center; */
    background-color: #f2f2f2;  }
  
`;

export default Global;