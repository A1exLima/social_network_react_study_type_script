import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :root{
    font-size: 62.5%;
    --font-roboto: 'Roboto', sans-serif;

    @media (max-width: 768px) {
      font-size: 52.5%;
    }
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${({theme})=> theme.COLORS.greenLight};
    border-radius: 2px;
  }

  body {
    background: ${({theme})=> theme.COLORS.gray1};
    color: ${({theme})=> theme.COLORS.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: var(--font-roboto);
    font-weight: 400;
    font-size: 1.6rem;
  }
`