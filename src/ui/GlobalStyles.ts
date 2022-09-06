import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";

export const GlobalStyles = createGlobalStyle`
//reset

*,
*::before,
*::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
}

html {
    line-height: 1.15;
    box-sizing: border-box;
    font-family: sans-serif;
}

main {
    display: block;
}

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

p+p {
    margin-top: 1rem;
}

a {
    background-color: transparent;
}

abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
}

code,
kbd,
samp,
pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

button,
input,
optgroup,
select,
textarea {
    line-height: inherit;
    border: 1px solid currentColor;
}

button {
    overflow: visible;
    text-transform: none;
   }

button,
[type=button],
[type=reset],
[type=submit] {
    -webkit-appearance: button;
    padding: 1px 6px;
}

input {
    overflow: visible;
}

input,
textarea {
    padding: 1px;
}

fieldset {
    border: 1px solid currentColor;
    margin: 0 2px;
}

legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
}

progress {
    display: inline-block;
    vertical-align: baseline;
}

select {
    text-transform: none;
}

textarea {
    overflow: auto;
    vertical-align: top;
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type=color] {
    background: inherit;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height: auto;
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.5;
}

::-webkit-search-decoration,
::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

::-moz-focus-inner {
    border: 0;
}

:-moz-focusring {
    outline: 1px dotted ButtonText;
}

:-moz-ui-invalid {
    box-shadow: none;
}

hr {
    box-sizing: content-box;
    height: 0;
    color: inherit;
    overflow: visible;
}

dl,
ol,
ul {
    margin: 1em 0;
    list-style: none;
}

ol ol,
ol ul,
ol dl,
ul ol,
ul ul,
ul dl,
dl ol,
dl ul,
dl dl {
    margin: 0;
}

b,
strong {
    font-weight: bolder;
}

audio,
video {
    display: inline-block;
}

audio:not([controls]) {
    display: none;
    height: 0;
}

img {
    border: 0;
}

svg:not(:root) {
    overflow: hidden;
}

table {
    text-indent: 0;
    border-color: inherit;
}

details {
    display: block;
}

dialog {
    background-color: inherit;
    border: solid;
    color: inherit;
    display: block;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: fit-content;
}

dialog:not([open]) {
    display: none;
}

summary {
    display: list-item;
}

canvas {
    display: inline-block;
}

template {
    display: none;
}

[hidden] {
    display: none;
}

//fonts

@font-face {
	font-family: 'Helios';
	src: url('../assets/fonts/HeliosC.eot');
	src: local('☺'), url('../assets/fonts/HeliosC.woff') format('woff'), url('../assets/fonts/HeliosC.ttf') format('truetype'), url('../assets/fonts/HeliosC.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Helios';
	src: url('../assets/fonts/HeliosC-Bold.eot');
	src: local('☺'), url('../assets/fonts/HeliosC-Bold.woff') format('woff'), url('../assets/fonts/HeliosC-Bold.ttf') format('truetype'), url('../assets/fonts/HeliosC-Bold.svg') format('svg');
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: 'BebasNeue';
	src: url('../assets/fonts/BebasNeue Bold.eot');
	src: local('☺'), url('../assets/fonts/BebasNeue Bold.woff') format('woff'), url('../assets/fonts/BebasNeue Bold.ttf') format('truetype'), url('../assets/fonts/BebasNeue Bold.svg') format('svg');
	font-weight: 700;
	font-style: normal;
}

//typography

body{
font-family: 'Helios', Arial, Helvetica, sans-serif;
background: ${Color.White};
color: ${Color.Primary}
}

h1{
font-family: 'Bebas Neue';
font-weight: 700;
font-size: 56px;
line-height: 64px;
   ${Media.SM}{
    font-size: 32px;
line-height: 44px;
   }
}

h2{
font-family: 'Bebas Neue';
font-weight: 700;
font-size: 40px;
line-height: 60px;
   ${Media.SM}{
    font-size: 28px;
   }
}

h3{
font-family: 'Bebas Neue';
font-weight: 700;
font-size: 24px;
line-height: 32px;

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
  --primary: #E7E7E7;
  --primary-light: #F7F7F7;
  --secondary: #FFFFFF;
  --white: #A8A8A8;
  --gray: #313037;
  --light:  #5B5A62;
  --red: #FC857F;
  --blue: #D7E4FD;
  --green: #CAEFF0;
  --orange: #FEE9E2;
  --purple: #F4EEFD;
}
`;
