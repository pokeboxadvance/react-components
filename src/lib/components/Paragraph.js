import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

import noMargin from '../mixins/noMargin'

export default styled.p`
  ${noMargin}
  ${fontSize('fontSizes.text')}
`
