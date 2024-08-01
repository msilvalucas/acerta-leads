import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *,
*::after,
*::before {
  box-sizing: border-box;
}

body {
    font-family: 'Source Sans 3', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #F5F6FA;
  }

`;

export default GlobalStyle;
