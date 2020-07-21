import React from 'react'
import styled from 'styled-components'
import { background, color, float, fontSize, width } from '@themed-styling/core'

import input from '../mixins/input'
import button from '../mixins/button'
import noMargin from '../mixins/noMargin'
import colored from '../mixins/colored'

// TODO: ${fontFamily('fonts.text')}

const Input = styled.input`
  ${input}
  ${noMargin}

  min-width: 0;
  border: none;
  ${width('100%')}
  ${fontSize('fontSizes.text')}
  ${float()}

  &[type="time"] {
    text-align: center;
  }

  &::placeholder {
    opacity: 0.5;
  }

  &[type="submit"] {
    ${button}
  }
`

export default ({ title, placeholder, ...props }) => (
  <Input title={title || placeholder} placeholder={placeholder} {...props} />
)
