import React from 'react'

import { Button, ButtonAnchor } from '../src/'

export default {
  title: 'Button',
}

export const ButtonStory = () => (
  <>
    <Button>Regular Button</Button>
    <Button inverted>Inverted Button</Button>
    <Button toggling>Regular Toggling Button</Button>
    <Button toggling inverted>
      Inverted Toggling Button
    </Button>
  </>
)

ButtonStory.story = {
  name: 'Button (<button>)',
}

export const ButtonAnchorStory = () => (
  <>
    <ButtonAnchor>Button Anchor</ButtonAnchor>
    <ButtonAnchor inverted>Inverted Button Anchor</ButtonAnchor>
  </>
)

ButtonAnchorStory.story = {
  name: 'Button Anchor (<a>)',
}
