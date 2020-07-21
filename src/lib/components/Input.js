import React from 'react'
import styled from 'styled-components'
import { background, color, fontSize, width } from '@themed-styling/core'

import inputStyle from '../mixins/inputStyle'
import buttonStyle from '../mixins/buttonStyle'
import marginStyle from '../mixins/marginStyle'
import coloredStyle from '../mixins/coloredStyle'
import headingStyle from '../mixins/headingStyle'

// TODO: ${fontFamily('fonts.text')}

const Input = styled.input`
  ${inputStyle}
  ${marginStyle}
  ${coloredStyle}

  &[type="time"] {
    text-align: center;
  }

  &::placeholder {
    opacity: 0.5;
  }

  &[type="submit"],
  &[type="button"],
  &[type="image"],
  &[type="reset"] {
    ${headingStyle}
    ${buttonStyle}
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
