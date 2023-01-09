import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button , input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  };

  html {
    background-color: var(--primary);
  }

  :root {
    --primary: #000;
    --secondary: #15181c;
    --search: #202327;
    --white: #d9d9d9;
    --gray: #7a7a7a;
    --outline: #2f3337;
    --retweet: #00c06b;
    --like: #382653;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6
  }
`;