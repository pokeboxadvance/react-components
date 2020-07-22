import React from 'react'
import styled from 'styled-components'
import { width, fontSize } from '@themed-styling/core'

import coloredStyle from '../mixins/coloredStyle'
import inputStyle from '../mixins/inputStyle'
import marginStyle from '../mixins/marginStyle'

const Select = styled.select`
  ${coloredStyle}
  ${inputStyle}
  ${marginStyle}
  cursor: pointer;
  ${fontSize('fontSizes.text')}

  & > option:disabled {
    opacity: 0.5;
  }
`

export default ({ children, options, ...props }) => (
  <Select {...props}>
    {options?.map(({ text, ...attributes }, index) => (
      <option key={index} {...attributes}>
        {text}
      </option>
    ))}
    {children}
  </Select>
)
