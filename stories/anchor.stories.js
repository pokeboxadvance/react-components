import React from 'react'

import { Anchor, ButtonAnchor } from '../src/'

export default {
  title: 'Anchor',
}

export const AnchorStory = () => <Anchor>Anchor</Anchor>

AnchorStory.story = {
  name: 'Anchor',
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
