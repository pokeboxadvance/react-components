import { css } from 'styled-components'
import {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
} from '@themed-styling/core'

const noMargin = css`
  ${margin('0')}
  ${marginTop()}
  ${marginRight()}
  ${marginBottom()}
  ${marginLeft()}
`

export default noMargin
