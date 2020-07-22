import { css } from 'styled-components'
import { background, color, fontSize, width } from '@themed-styling/core'

const shape = css`
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 100vw;
`

export default css`
  ${shape}

  transition: color 50ms linear, background-color 50ms linear;

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    ${color('colors.text')}
  }

  &:hover:not(:disabled) {
    ${background('colors.accent')}
  }

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    ${background('colors.interact')}
  }

  &:invalid:not(:disabled):not(:placeholder-shown) {
    ${background('colors.error')}
    box-shadow: none;
  }
`
