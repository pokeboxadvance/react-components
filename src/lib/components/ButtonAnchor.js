import styled from 'styled-components'
import { width, minWidth } from '@themed-styling/core'

import buttonStyle from '../mixins/buttonStyle'
import marginStyle from '../mixins/marginStyle'
import headingStyle from '../mixins/headingStyle'
import coloredStyle from '../mixins/coloredStyle'

export default styled.a`
  ${headingStyle}
  ${coloredStyle}
  ${buttonStyle}
  ${marginStyle}
  text-decoration: none;
  ${width()}

  /*&:not(:link):hover,
  &:not(:link):focus,
  &:not(:link):active {
    filter: grayscale(100%);
    cursor: not-allowed;
  }*/
`
