import { createGlobalStyle } from 'styled-components'

import { fontSize } from '@themed-styling/core'

export default createGlobalStyle`
  html {
    ${fontSize('fontSizes.root')}
  }
`
