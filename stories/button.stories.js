import React from 'react'

import { Button, ButtonAnchor } from '../src/'

import Checkers from './util/Checkers'

export default {
  title: 'Button',
}

export const ButtonStory = () => (
  <Checkers>
    <Button>Regular Button</Button>
    <Button inverted>Inverted Button</Button>
    <Button toggling>Regular Toggling Button</Button>
    <Button toggling inverted>
      Inverted Toggling Button
    </Button>
    <Button round>R</Button>
    <Button round inverted>
      IR
    </Button>
    <Button round toggling>
      RT
    </Button>
    <Button round toggling inverted>
      IRT
    </Button>
  </Checkers>
)

ButtonStory.story = {
  name: 'Button',
}
