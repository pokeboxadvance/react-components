import React from 'react'

import { Input } from '../src/'

export default {
  title: 'Input',
}

export const InputStory = () => (
  <>
    <Input type={'text'} placeholder={'Text Input'} />
    <Input type={'text'} placeholder={'Inverted Text Input'} inverted />
    <Input type={'password'} placeholder={'Password Input'} />
    <Input type={'number'} placeholder={'Number Input'} />
    <Input type={'submit'} value={'Submit Input'} />
  </>
)

InputStory.story = {
  name: 'Input',
}
