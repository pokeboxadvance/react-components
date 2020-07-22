import React from 'react'
import styled, { css } from 'styled-components'
import {
  background,
  color,
  fontSize,
  width,
  height,
  boxShadow,
} from '@themed-styling/core'

import inputStyle from '../mixins/inputStyle'
import buttonStyle from '../mixins/buttonStyle'
import marginStyle from '../mixins/marginStyle'
import coloredStyle from '../mixins/coloredStyle'
import headingStyle from '../mixins/headingStyle'

// TODO: ${fontFamily('fonts.text')}

// TODO: checkbox, color, ~file, range, radio styling

const rangeSize = '3em'

const thumbStyle = css`
  ${coloredStyle}
  border-radius: 100vw;
  border: none;
  transition: background 50ms linear;
  height: calc(${({ size = rangeSize }) => size} * 0.7);
  width: calc(${({ size = rangeSize }) => size} * 0.7);
  ${boxShadow('shadows.map.control')}

  &:hover {
    ${background('colors.accent')}
  }

  &:active {
    ${background('colors.interact')}
  }
`

const trackStyle = css`
  ${coloredStyle}
  border: none;
  box-sizing: border-box;
  border-radius: 100vw;
  height: calc(${({ size = rangeSize }) => size} * 0.2);
  margin: 0 calc(${({ size = rangeSize }) => size} * 0.25);
  padding: 0;
`

const Input = styled.input`
  ${marginStyle}
  ${fontSize('fontSizes.text')}
  ${width()}

  &::placeholder {
    opacity: 0.5;
  }

  &[type='date'],
  &[type='datetime-local'],
  &[type='email'],
  &[type='month'],
  &[type='number'],
  &[type='password'],
  &[type='tel'],
  &[type='text'],
  &[type='time'],
  &[type='url'],
  &[type='week'],
  &[type='date'],
  &[type='submit'],
  &[type='button'],
  &[type='image'],
  &[type='reset'] {
    ${coloredStyle}
  }

  &[type='date'],
  &[type='datetime-local'],
  &[type='email'],
  &[type='month'],
  &[type='number'],
  &[type='password'],
  &[type='tel'],
  &[type='text'],
  &[type='time'],
  &[type='url'],
  &[type='week'],
  &[type='date'] {
    ${inputStyle}
  }

  &[type='submit'],
  &[type='button'],
  &[type='image'],
  &[type='reset'] {
    ${headingStyle}
    ${buttonStyle}
  }

  &[type='checkbox'],
  &[type='color'],
  &[type='date'],
  &[type='file'],
  &[type='range'],
  &[type='radio'],
  &[type='time'] {
    cursor: pointer;
  }

  &[type='range'] {
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    background: none;
    height: 2.9em;
  }

  /* FF */
  &[type='range']::-moz-range-thumb {
    ${thumbStyle}
  }

  &[type='range']::-moz-range-track {
    ${trackStyle}
  }

  /* WEBKIT */
  &[type='range']::-webkit-slider-thumb {
    ${thumbStyle}
  }

  /* IE */
  &[type='range']::-ms-thumb {
    ${thumbStyle}
  }

  &[type='range']::-ms-track {
    ${trackStyle}
  }
`

export default ({ title, placeholder, value, ...props }) => (
  <Input
    title={title || placeholder || value}
    value={value}
    placeholder={placeholder}
    {...props}
  />
)
