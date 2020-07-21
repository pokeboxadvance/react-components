import { createGlobalStyle } from 'styled-components'

import { fontSize } from '@themed-styling/core'

import LatoRegularWOFF from '@openfonts/lato_latin/files/lato-latin-400.woff'
import LatoRegularWOFF2 from '@openfonts/lato_latin/files/lato-latin-400.woff2'

import Lato900WOFF from '@openfonts/lato_latin/files/lato-latin-900.woff'
import Lato900WOFF2 from '@openfonts/lato_latin/files/lato-latin-900.woff2'

import LibreBaskervilleRegularWOFF from '@openfonts/libre-baskerville_latin/files/libre-baskerville-latin-400.woff'
import LibreBaskervilleRegularWOFF2 from '@openfonts/libre-baskerville_latin/files/libre-baskerville-latin-400.woff2'

import LibreBaskervilleRegularItalicWOFF from '@openfonts/libre-baskerville_latin/files/libre-baskerville-latin-400-italic.woff'
import LibreBaskervilleRegularItalicWOFF2 from '@openfonts/libre-baskerville_latin/files/libre-baskerville-latin-400-italic.woff2'

import LibreBaskervilleBoldWOFF from '@openfonts/libre-baskerville_latin/files/libre-baskerville-latin-700.woff'
import LibreBaskervilleBoldWOFF2 from '@openfonts/libre-baskerville_latin/files/libre-baskerville-latin-700.woff2'

// TODO: take font family from theme

export default createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Lato Regular'),
      local('Lato-Regular'),
      url(${LatoRegularWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${LatoRegularWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-display: swap;
    font-weight: 900;
    src:
      local('Lato Black'),
      local('Lato-Black'),
      url(${Lato900WOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${Lato900WOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
      local('Libre Baskerville'),
      local('LibreBaskerville-Regular'),
      url(${LibreBaskervilleRegularWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${LibreBaskervilleRegularWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Libre Baskerville';
    font-style: italic;
    font-display: swap;
    font-weight: 400;
    src:
      local('Libre Baskerville Italic'),
      local('LibreBaskerville-Italic'),
      url(${LibreBaskervilleRegularItalicWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${LibreBaskervilleRegularItalicWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src:
      local('Libre Baskerville Bold'),
      local('LibreBaskerville-Bold'),
      url(${LibreBaskervilleBoldWOFF2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url(${LibreBaskervilleBoldWOFF}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html {
    font-family: Libre Baskerville, serif;
    word-spacing: 0.1em;
    line-height: 2;
    ${fontSize('fontSizes.root')}
  }
`
