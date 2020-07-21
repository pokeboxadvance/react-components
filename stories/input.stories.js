import React from 'react'

import { Input } from '../src/'

import Checkers from './util/Checkers'

export default {
  title: 'Input',
}

export const InputStory = () => (
  <Checkers>
    <Input
      type={'text'}
      placeholder={'Text Input'}
      marginBottom={'spaces.between.items'}
    />
    <Input
      type={'text'}
      placeholder={'Inverted Text Input'}
      inverted
      marginBottom={'spaces.between.items'}
    />
    <Input
      type={'password'}
      placeholder={'Password Input'}
      marginBottom={'spaces.between.items'}
    />
    <Input
      type={'number'}
      placeholder={'Number Input'}
      marginBottom={'spaces.between.items'}
    />
    <Input
      type={'submit'}
      value={'Submit Input'}
      marginBottom={'spaces.between.items'}
    />
  </Checkers>
)

InputStory.story = {
  name: 'Input',
}
