import React from 'react'
import styled from 'styled-components'

import { GridDiv, Button, gridItemStyle } from '../src/'

import Checkers from './util/Checkers'

const Item = styled(Button)`
  ${gridItemStyle}
`

export default {
  title: 'Grid',
}

export const Grid4x2Story = () => (
  <Checkers>
    <GridDiv gridTemplate={'auto auto auto auto / auto 1fr'} gridGap={'1rem'}>
      <Item gridRow={1} gridColumn={1}>
        Row 1 / Column 1
      </Item>
      <Item gridRow={2} gridColumn={1}>
        Row 2 / Column 1
      </Item>
      <Item gridRow={3} gridColumn={1}>
        Row 3 / Column 1
      </Item>
      <Item gridRow={4} gridColumn={1}>
        Row 4 / Column 1
      </Item>
      <Item gridRow={1} gridColumn={2}>
        Row 1 / Column 2
      </Item>
      <Item gridRow={2} gridColumn={2}>
        Row 2 / Column 2
      </Item>
      <Item gridRow={3} gridColumn={2}>
        Row 3 / Column 2
      </Item>
      <Item gridRow={4} gridColumn={2}>
        Row 4 / Column 2
      </Item>
    </GridDiv>
  </Checkers>
)

Grid4x2Story.story = {
  name: '4r x 2c',
}
