import { createGlobalStyle } from 'styled-components'

import { fontSize } from '@themed-styling/core'

import HeadingWOFF from '@openfonts/lato_latin/files/lato-latin-900.woff'
import HeadingWOFF2 from '@openfonts/lato_latin/files/lato-latin-900.woff2'

import TextRegularWOFF from '@openfonts/lato_latin/files/lato-latin-400.woff'
import TextRegularWOFF2 from '@openfonts/lato_latin/files/lato-latin-400.woff2'

import TextItalicWOFF from '@openfonts/lato_latin/files/lato-latin-400-italic.woff'
import TextItalicWOFF2 from '@openfonts/lato_latin/files/lato-latin-400-italic.woff2'

import TextBoldWOFF from '@openfonts/lato_latin/files/lato-latin-700.woff'
import TextBoldWOFF2 from '@openfonts/lato_latin/files/lato-latin-700.woff2'

// TODO: take font family from theme

export default createGlobalStyle`
  /* HEADING */

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 900;
    src:
      local('Lato Black'),
      local('Lato-Black'),
      url(${HeadingWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${HeadingWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* TEXT REGULAR */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Lato Regular'),
      local('Lato-Regular'),
      url(${TextRegularWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${TextRegularWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* TEXT ITALIC */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-display: swap;
    font-weight: 400;
    src:
      local('Lato Italic'),
      local('Lato-Italic'),
      url(${TextItalicWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${TextItalicWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* TEXT BOLD */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src:
      local('Lato Bold'),
      local('Lato-Bold'),
      url(${TextBoldWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${TextBoldWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html {
    font-family: Lato, sans-serif;
    font-weight: 500;
    word-spacing: 0.1em;
    line-height: 2;
    ${fontSize('fontSizes.root')}
  }
`
