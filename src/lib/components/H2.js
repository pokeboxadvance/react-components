import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

import heading from '../mixins/heading'

export default styled.h2`
  ${heading}
  ${fontSize('fontSizes.h2')}
`
