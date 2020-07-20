import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from '../src'
import checkers from './checkers.svg'

// const roots = {
//   options: {
//     /**
//     * Show top level groups differently
//     */
//     showRoots: true
//   }
// }

const Checkers = createGlobalStyle`
  body {
    background: url(${checkers});
    background-repeat: repeat;
    background-attachment: fixed;
  }
`

const themeProvider = story => (
  <ThemeProvider theme={theme}>
    {story()}
    <Checkers />
  </ThemeProvider>
)

// addParameters(roots)
addDecorator(themeProvider)
