import { createGlobalStyle } from "styled-components";
import { resetCSS, theme, Color } from ".";

export const GlobalStyles = createGlobalStyle`

${resetCSS}
${theme}

body{
font-family: 'Nunito Sans', sans-serif;
background: ${Color.White};
color: ${Color.Primary};
}
`;
