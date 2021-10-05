import { createGlobalStyle } from 'styled-components';
import imgBackGround from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: #f2f2fa;
    background-image: url(${imgBackGround});
    background-repeat: no-repeat;
    background-size: 30%;
    background-position: top;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;