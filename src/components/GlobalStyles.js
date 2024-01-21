import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import manropeReg from '../fonts/Manrope-Regular.woff';
import manropeRegSec from '../fonts/Manrope-Regular.woff2';
import manropeMed from '../fonts/Manrope-Medium.woff';
import manropeMedSec from '../fonts/Manrope-Medium.woff2';
import manropeSB from '../fonts/Manrope-SemiBold.woff';
import manropeSBSec from '../fonts/Manrope-SemiBold.woff2';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  /* height: auto; */
  object-fit: cover;
}

li {
  list-style: none;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none; 
  cursor: pointer;
}

@font-face {
  font-family: 'Manrope';
  src: url(${manropeReg}), url(${manropeRegSec});
  font-weight: 400;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url(${manropeMed}), url(${manropeMedSec});
  font-weight: 500;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url(${manropeSB}), url(${manropeSBSec});
  font-weight: 600;
  font-display: swap;
  font-style: normal;
}
`;
