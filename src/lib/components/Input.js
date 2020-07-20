import React from 'react'
import styled from 'styled-components'
import { background, color, fontSize, width } from '@themed-styling/core'

import input from '../mixins/input'
import button from '../mixins/button'

const Input = styled.input`
  ${input}

  display: flex;
  min-width: 0;
  margin: 0;
  font-family: Lato, sans-serif;
  border: none;
  flex: 0;
  ${({ float }) => float && `float: ${float};`}
  ${({ inverted }) => (inverted ? 'color: white;' : color('colors.light'))}
  ${({ inverted }) =>
    inverted ? background('colors.light') : 'background: white;'}
  ${width('100%')}
  ${fontSize('fontSize.text')}

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

export default ({ placeholder, ...props }) => (
  <Input title={placeholder} placeholder={placeholder} {...props} />
)
