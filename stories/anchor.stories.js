import React from 'react'

import { ButtonAnchor } from '../src/'

export default {
  title: 'Anchor',
}

export const ButtonAnchorStory = () => (
  <>
    <ButtonAnchor>Button Anchor</ButtonAnchor>
    <ButtonAnchor inverted>Inverted Button Anchor</ButtonAnchor>
  </>
)

ButtonAnchorStory.story = {
  name: 'Button Anchor',
}
