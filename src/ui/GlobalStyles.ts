import { createGlobalStyle } from "styled-components";
import { H1, H2, H3, S1, BODY2, resetCSS, theme, Color } from ".";

export const GlobalStyles = createGlobalStyle`

${resetCSS}
${H1}
${H2}
${H3}
${S1}
${BODY2}
${theme}

body{
font-family: 'Nunito Sans', sans-serif;
background: ${Color.White};
color: ${Color.Primary};
transition: all 1s ease 0s;
}
`;
