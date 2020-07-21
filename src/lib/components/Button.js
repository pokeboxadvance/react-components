import styled from 'styled-components'
import { width } from '@themed-styling/core'

import headingStyle from '../mixins/headingStyle'
import coloredStyle from '../mixins/coloredStyle'
import buttonStyle from '../mixins/buttonStyle'
import marginStyle from '../mixins/marginStyle'

export default styled.button`
  ${headingStyle}
  ${coloredStyle}
  ${buttonStyle}
  ${marginStyle}
  ${width()}
`
