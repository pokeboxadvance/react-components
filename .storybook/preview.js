import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme, GlobalFonts } from '../src'

// const roots = {
//   options: {
//     /**
//      * Show top level groups differently
//      */
//     showRoots: true,
//   },
// }

const themeProvider = story => (
  <ThemeProvider theme={theme}>
    {story()}
    <GlobalFonts />
  </ThemeProvider>
)

// addParameters(roots)
addDecorator(themeProvider)
