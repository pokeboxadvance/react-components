import { css } from 'styled-components'
import { color } from '@themed-styling/core'

export default css`
  transition: color 50ms linear;
  color: inherit;
  cursor: pointer;

  &:hover,
  &:focus,
  &.hover,
  &.focus {
    ${color('colors.accent', true)}
  }

  &:active,
  &.active {
    ${color('colors.interact', true)}
  }
`
