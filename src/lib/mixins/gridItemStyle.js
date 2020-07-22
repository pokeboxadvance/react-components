import { css } from 'styled-components'
import {
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  justifySelf,
  alignSelf,
} from '@themed-styling/core'

export default css`
  ${gridColumn()}
  ${gridColumnEnd()}
  ${gridColumnStart()}
  ${gridRow()}
  ${gridRowEnd()}
  ${gridRowStart()}
  ${justifySelf()}
  ${alignSelf()}
`
