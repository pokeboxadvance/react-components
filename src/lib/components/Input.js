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

  min-width: 0px;
  border: none;
  ${fontSize('fontSizes.text')}
  ${width()}

  &[type="time"] {
    text-align: center;
  }

  &::placeholder {
    opacity: 0.5;
  }

  &[type="submit"] {
    ${headingStyle}
    ${buttonStyle}
  }
`

export default ({ title, placeholder, ...props }) => (
  <Input title={title || placeholder} placeholder={placeholder} {...props} />
)
