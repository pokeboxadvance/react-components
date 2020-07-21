import React from 'react'

import { Anchor, ButtonAnchor } from '../src/'

import Checkers from './util/Checkers'
import AppColors from './util/AppColors'

export default {
  title: 'Anchor',
}

export const AnchorStory = () => (
  <AppColors>
    <Anchor style={{ display: 'inline-flex' }}>Anchor</Anchor>
  </AppColors>
)

AnchorStory.story = {
  name: 'Anchor',
}

export const ButtonAnchorStory = () => (
  <Checkers>
    <ButtonAnchor margin={'0.5rem'}>Button Anchor</ButtonAnchor>
    <ButtonAnchor inverted margin={'0.5rem'}>
      Inverted Button Anchor
    </ButtonAnchor>
    <ButtonAnchor round margin={'0.5rem'}>
      RA
    </ButtonAnchor>
    <ButtonAnchor round inverted margin={'0.5rem'}>
      RA
    </ButtonAnchor>
  </Checkers>
)

ButtonAnchorStory.story = {
  name: 'Button Anchor',
}
