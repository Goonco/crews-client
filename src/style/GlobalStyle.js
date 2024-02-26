import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *::-webkit-scrollbar{
        display: none;
    }
    body * {
        box-sizing: border-box;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
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
