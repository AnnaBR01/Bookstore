import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { fonts } from "./fonts";
import { resetCSS } from "./reset";
import { H1, H2, H3, S1, BODY2 } from "./typography";

export const GlobalStyles = createGlobalStyle`

${resetCSS}
${fonts}
${H1}
${H2}
${H3}
${S1}
${BODY2}

body{
font-family: 'Helios', Arial, Helvetica, sans-serif;
background: ${Color.White};
color: ${Color.Primary}
}

html[theme='ligth']{
  --primary: #313037;
  --primary-light: #5B5A62;
  --secondary: #A8A8A8;
  --white: #FFFFFF;
  --gray: #E7E7E7;
  --light: #F7F7F7;
  --red: #FC857F;
  --blue: #D7E4FD;
  --green: #CAEFF0;
  --orange: #FEE9E2;
  --purple: #F4EEFD;
}

html[theme='dark']{
  --primary: #FFFFFF;
  --primary-light: #F7F7F7;
  --secondary: #F7F7F7;
  --white: #313037;
  --gray: #313037;
  --light:  #A8A8A8;
  --red: #FC857F;
  --blue: #D7E4FD;
  --green: #CAEFF0;
  --orange: #FEE9E2;
  --purple: #F4EEFD;
}
`;
