import { css } from 'styled-components'
import {
  grid,
  gridTemplate,
  gridTemplateColumns,
  gridTemplateRows,
  gridGap,
  gridColumnGap,
  gridRowGap,
  justifyContent,
  alignItems,
} from '@themed-styling/core'

export default css`
  display: grid;
  ${grid()}
  ${gridTemplate()}
  ${gridTemplateColumns()}
  ${gridTemplateRows()}
  ${gridGap()}
  ${gridColumnGap()}
  ${gridRowGap()}
  ${justifyContent()}
  ${alignItems()}
`
