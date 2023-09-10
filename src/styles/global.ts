import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, * {
    padding: 0;
    margin: 0;
    box-sizing: "border-box";

    font-family: Inter, Arial, Helvetica, sans-serif;
  }

  html {
    background-color: var(--gray-600);
  }

  :root {
    --gray-700: #0d0d0d;
    --gray-600: #1A1A1A;
    --gray-500: #262626;
    --gray-400: #333;
    --gray-300: #808080;
    --gray-200: #D9D9D9;
    --gray-100: #F2F2F2;

    --blue-dark: #1E6F9F;
    --blue: #4EA8DE;
    --purple: #8284FA;

    --white: #fff;
  }
`;