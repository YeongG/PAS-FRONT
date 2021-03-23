import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        font-family:Noto Sans KR
    }
    
    input,button {
        outline:none;
        border:none;
        background:none;
    }
`;

export default GlobalStyle;
