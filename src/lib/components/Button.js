import styled from 'styled-components'
import { width } from '@themed-styling/core'

import button from '../mixins/button'
import noMargin from '../mixins/noMargin'

export default styled.button`
  ${button}
  ${noMargin}
  ${width()}
`
