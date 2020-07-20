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

export const shape = css`
  padding: 0.75em 1.5em;
  border: none;
  border-radius: 100vw;
`

const togglingAccent = css`
  ${color('colors.text', true)}
  ${background('colors.accent', true)}
`

const togglingInteract = css`
  ${color('colors.text', true)}
  ${background('colors.accent', true)}
`

const noDimension = css`
  justify-content: center;
  align-items: center;
  height: 0;
  width: 0;
  padding: 1em;
`

// ${transition('transitions.in')}

const button = css`
  ${shape}
  ${heading}
  ${colored}

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 50ms linear, border-color 50ms linear,
    color 50ms linear, transform 200ms ;
  ${fontSize('1em')}
  ${margin('auto')}
  ${boxShadow()}
  ${dropShadow()}

  &:hover:not(:disabled),
  &:focus:not(:disabled),
  &.hover:not(:disabled),
  &.focus:not(:disabled) {
    ${({ toggling }) => (toggling ? 'transform: scale(1.1);' : togglingAccent)}
  }

  &:active:not(:disabled),
  &.active:not(:disabled) {
    transform: scale(0.9);
    ${({ toggling }) => (toggling ? '' : togglingInteract)}
  }

  ${({ round }) => round && noDimension}
`

export default button
