import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

import headingStyle from '../mixins/headingStyle'
import marginStyle from '../mixins/marginStyle'

export default styled.h3`
  ${headingStyle}
  ${marginStyle}
  ${fontSize('fontSizes.h3')}
`
