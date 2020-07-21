import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

import heading from '../mixins/heading'
import noMargin from '../mixins/noMargin'

export default styled.h3`
  ${heading}
  ${noMargin}
  ${fontSize('fontSizes.h3')}
`
