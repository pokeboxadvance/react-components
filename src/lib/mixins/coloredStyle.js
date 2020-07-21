import { css } from 'styled-components'
import { background, color } from '@themed-styling/core'

const normalColors = css`
  ${color('colors.light')}
  ${background('colors.text')}
`

const invertedColors = css`
  ${color('colors.text')}
  ${background('colors.light')}
`

const colored = css`
  ${({ inverted }) => (inverted ? invertedColors : normalColors)}

  &:disabled {
    background: ${color('colors.disabled', true)};
    color: white;
    cursor: not-allowed;
  }
`

export default colored
