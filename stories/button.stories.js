import React from 'react'

import { Button, ButtonAnchor } from '../src/'

import Checkers from './util/Checkers'

export default {
  title: 'Button',
}

export const ButtonStory = () => (
  <Checkers>
    <Button margin={'0.5rem'}>Regular Button</Button>
    <Button inverted margin={'0.5rem'}>
      Inverted Button
    </Button>
    <Button toggling margin={'0.5rem'}>
      Regular Toggling Button
    </Button>
    <Button toggling inverted margin={'0.5rem'}>
      Inverted Toggling Button
    </Button>
  </Checkers>
)

ButtonStory.story = {
  name: 'Regular',
}

export const RoundButtonStory = () => (
  <Checkers>
    <Button round margin={'0.5rem'}>
      R
    </Button>
    <Button round inverted margin={'0.5rem'}>
      IR
    </Button>
    <Button round toggling margin={'0.5rem'}>
      RT
    </Button>
    <Button round toggling inverted margin={'0.5rem'}>
      IRT
    </Button>
  </Checkers>
)

RoundButtonStory.story = {
  name: 'Round',
}
