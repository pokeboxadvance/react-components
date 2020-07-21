import styled from 'styled-components'
import { width, minWidth } from '@themed-styling/core'

import button from '../mixins/button'
import noMargin from '../mixins/noMargin'

export default styled.a`
  ${button}
  ${noMargin}
  text-decoration: none;
  ${width()}
`
