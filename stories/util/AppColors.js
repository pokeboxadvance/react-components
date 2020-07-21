import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { background, color } from '@themed-styling/core'

export const AppColors = createGlobalStyle`
  body {
    ${color('colors.text')}
    ${background('colors.main')}
  }
`

export default ({ children }) => (
  <>
    {children}
    <AppColors />
  </>
)
