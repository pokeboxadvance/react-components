import { css } from 'styled-components'
import {
  background,
  color,
  fontSize,
  margin,
  boxShadow,
  dropShadow,
} from '@themed-styling/core'

import heading from './heading'
import colored from './colored'

export const normalShape = css`
  padding: 0.75em 1.5em;
`

const roundShape = css`
  justify-content: center;
  align-items: center;
  height: 0;
  width: 0;
  padding: 1.5em;
`

const togglingHover = css`
  transform: scale(1.05);
`

const togglingFocus = css``

const togglingActive = css`
  transform: scale(1);
  ${color('colors.text', true)}
  ${background('colors.interact', true)}
`

const normalHover = css`
  ${color('colors.text', true)}
  ${background('colors.accent', true)}
`

const normalFocus = css``

const normalActive = css`
  transform: scale(0.9);
  ${color('colors.text', true)}
  ${background('colors.interact', true)}
`

// ${transition('transitions.in')}

const button = css`
  ${heading}
  ${colored}

  border: none;
  border-radius: 100vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 50ms linear, border-color 50ms linear,
    color 50ms linear, transform 200ms;
  ${fontSize('1em')}
  ${boxShadow()}
  ${dropShadow()}

  &:hover:not(:disabled),
  &.hover:not(:disabled) {
    ${({ toggling }) => (toggling ? togglingHover : normalHover)}
  }

  &:focus:not(:disabled),
  &.focus:not(:disabled) {
    ${({ toggling }) => (toggling ? togglingFocus : normalFocus)}
  }

  &:active:not(:disabled),
  &.active:not(:disabled) {
    ${({ toggling }) => (toggling ? togglingActive : normalActive)}
  }

  ${({ round }) => (round ? roundShape : normalShape)}
`

export default button
