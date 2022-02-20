import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root{
    --mainColor: #22242e;
    --secondaryColor: #10131c;
    --greenColor: #47913f;
    --fontColor: #ffffff;
}
*{
    margin:0;
    padding:0;
    font-family: Arial, Helvetica, sans-serif;
}
body{
    background: var(--mainColor) ;
}
.error-message{
    color: red;
}

`;

export default GlobalStyle;
