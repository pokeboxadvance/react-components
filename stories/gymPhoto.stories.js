import React from 'react'

import { GymPhoto } from '../src/'

import Checkers from './util/Checkers'

export default {
  title: 'Gym Photo',
}

export const NormalGymPhotoStory = () => (
  <Checkers>
    <GymPhoto id={'49231f10-5164-11ea-b991-002590ebfe78'} />
  </Checkers>
)

NormalGymPhotoStory.story = {
  name: 'Normal Gym',
}

export const ExGymPhotoStory = () => (
  <Checkers>
    <GymPhoto id={'49231f10-5164-11ea-b991-002590ebfe78'} ex />
  </Checkers>
)

ExGymPhotoStory.story = {
  name: 'EX Gym',
}

export const BothGymPhotoStory = () => (
  <Checkers>
    <GymPhoto id={'49231f10-5164-11ea-b991-002590ebfe78'} margin={'0.5rem'} />
    <GymPhoto
      id={'49231f10-5164-11ea-b991-002590ebfe78'}
      ex
      margin={'0.5rem'}
    />
  </Checkers>
)

BothGymPhotoStory.story = {
  name: 'Both',
}
