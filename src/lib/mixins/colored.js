import { css } from 'styled-components'
import { background, color } from '@themed-styling/core'

const normalColours = css`
  ${color('colors.light')}
  ${background('colors.text')}
`

const invertedColours = css`
  ${color('colors.text')}
  ${background('colors.light')}
`

const coloured = css`
  ${({ inverted }) => (inverted ? invertedColours : normalColours)}

  &:disabled {
    background: ${color('colors.disabled')};
    color: white;
    cursor: not-allowed;
  }
`

export default coloured
