import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

import marginStyle from '../mixins/marginStyle'

export default styled.p`
  ${marginStyle}
  ${fontSize('fontSizes.text')}
`
