import React from 'react'

import { Anchor, ButtonAnchor } from '../src/'

import Checkers from './util/Checkers'
import AppColors from './util/AppColors'

export default {
  title: 'Anchor',
}

export const AnchorStory = () => (
  <AppColors>
    <Anchor>No href here</Anchor>
    <br />
    <Anchor
      href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'}
    >
      Here is your href
    </Anchor>
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
      IRA
    </ButtonAnchor>
    <ButtonAnchor
      href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'}
      margin={'0.5rem'}
    >
      Button Anchor w/ href
    </ButtonAnchor>
    <ButtonAnchor
      href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'}
      inverted
      margin={'0.5rem'}
    >
      Inverted Button Anchor w/ href
    </ButtonAnchor>
    <ButtonAnchor
      href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'}
      round
      margin={'0.5rem'}
    >
      RAH
    </ButtonAnchor>
    <ButtonAnchor
      href={'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'}
      round
      inverted
      margin={'0.5rem'}
    >
      IRAH
    </ButtonAnchor>
  </Checkers>
)

ButtonAnchorStory.story = {
  name: 'Button Anchor',
}
