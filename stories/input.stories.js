import React from 'react'

import { Input } from '../src/'

import Checkers from './util/Checkers'

export default {
  title: 'Input',
}

// TODO: checkbox, color, ~file, range, radio

export const AllInputsStory = () => (
  <Checkers>
    <Input type={'checkbox'} placeholder={'Checkbox Input'} margin={'0.5rem'} />
    <Input type={'color'} placeholder={'Color Input'} margin={'0.5rem'} />
    <Input type={'date'} placeholder={'Date Input'} margin={'0.5rem'} />
    <Input
      type={'datetime-local'}
      placeholder={'Datetime Local Input'}
      margin={'0.5rem'}
    />
    <Input type={'email'} placeholder={'Email Input'} margin={'0.5rem'} />
    <Input type={'file'} placeholder={'File Input'} margin={'0.5rem'} />
    <Input type={'hidden'} placeholder={'Hidden Input'} margin={'0.5rem'} />
    <Input type={'month'} placeholder={'Month Input'} margin={'0.5rem'} />
    <Input type={'number'} placeholder={'Number Input'} margin={'0.5rem'} />
    <Input type={'password'} placeholder={'Password Input'} margin={'0.5rem'} />
    <Input type={'range'} placeholder={'Range Input'} margin={'0.5rem'} />
    <Input type={'radio'} placeholder={'Radio Input'} margin={'0.5rem'} />
    <Input type={'tel'} placeholder={'Tel Input'} margin={'0.5rem'} />
    <Input type={'text'} placeholder={'Text Input'} margin={'0.5rem'} />
    <Input type={'time'} placeholder={'Time Input'} margin={'0.5rem'} />
    <Input type={'url'} placeholder={'URL Input'} margin={'0.5rem'} />
    <Input type={'week'} placeholder={'Week Input'} margin={'0.5rem'} />

    <Input type={'button'} value={'Button Input'} margin={'0.5rem'} />
    <Input
      type={'image'}
      src={
        'https://pokeboxadvance.net/assets/gyms/49231f10-5164-11ea-b991-002590ebfe78.jpg'
      }
      value={'Image Input'}
      height={'50px'}
      margin={'0.5rem'}
    />
    <Input type={'reset'} value={'Reset Input'} margin={'0.5rem'} />
    <Input type={'submit'} value={'Submit Input'} margin={'0.5rem'} />

    <Input
      type={'checkbox'}
      placeholder={'Checkbox Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'color'}
      placeholder={'Color Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'date'}
      placeholder={'Date Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'datetime-local'}
      placeholder={'Datetime Local Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'email'}
      placeholder={'Email Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'file'}
      placeholder={'File Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'hidden'}
      placeholder={'Hidden Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'month'}
      placeholder={'Month Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'number'}
      placeholder={'Number Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'password'}
      placeholder={'Password Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'range'}
      placeholder={'Range Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'radio'}
      placeholder={'Radio Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input type={'tel'} placeholder={'Tel Input'} inverted margin={'0.5rem'} />
    <Input
      type={'text'}
      placeholder={'Text Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input
      type={'time'}
      placeholder={'Time Input'}
      inverted
      margin={'0.5rem'}
    />
    <Input type={'url'} placeholder={'URL Input'} inverted margin={'0.5rem'} />
    <Input
      type={'week'}
      placeholder={'Week Input'}
      inverted
      margin={'0.5rem'}
    />

    <Input type={'button'} value={'Button Input'} inverted margin={'0.5rem'} />
    <Input
      type={'image'}
      src={
        'https://pokeboxadvance.net/assets/gyms/49231f10-5164-11ea-b991-002590ebfe78.jpg'
      }
      value={'Image Input'}
      inverted
      height={'50px'}
      margin={'0.5rem'}
    />
    <Input type={'reset'} value={'Reset Input'} inverted margin={'0.5rem'} />
    <Input type={'submit'} value={'Submit Input'} inverted margin={'0.5rem'} />
  </Checkers>
)

AllInputsStory.story = {
  name: 'All',
}
