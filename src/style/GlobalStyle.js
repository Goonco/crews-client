import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body * {
        box-sizing: border-box;
    };
    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        cursor: pointer;
    }
    input {
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        background: none;
    }
    textarea {
        resize: none;
        outline: none;
    }
    a {
        text-decoration:none;
        outline:none;
    }
`;

export default GlobalStyle;
