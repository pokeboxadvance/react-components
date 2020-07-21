import React from 'react'

import { H1, H2, H3, Paragraph } from '../src/'

import AppColors from './util/AppColors'

export default {
  title: 'Text',
}

export const H1Story = () => (
  <AppColors>
    <H1>This is Heading 1</H1>
  </AppColors>
)

H1Story.story = {
  name: 'H1',
}

export const H2Story = () => (
  <AppColors>
    <H2>This is Heading 2</H2>
  </AppColors>
)

H2Story.story = {
  name: 'H2',
}

export const H3Story = () => (
  <AppColors>
    <H3>This is Heading 3</H3>
  </AppColors>
)

H3Story.story = {
  name: 'H3',
}

export const ParagraphStory = () => (
  <AppColors>
    <Paragraph>
      This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text. This is a paragraph of text. This is a paragraph of
      text. This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text.
    </Paragraph>
  </AppColors>
)

ParagraphStory.story = {
  name: 'Paragraph',
}

export const TextStory = () => (
  <AppColors>
    <H1>This is Heading 1</H1>
    <Paragraph>
      This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text. This is a paragraph of text. This is a paragraph of
      text. This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text.
    </Paragraph>
    <H2>This is Heading 2</H2>
    <Paragraph>
      This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text. This is a paragraph of text. This is a paragraph of
      text. This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text.
    </Paragraph>
    <H3>This is Heading 3</H3>
    <Paragraph>
      This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text. This is a paragraph of text. This is a paragraph of
      text. This is a paragraph of text. This is a paragraph of text. This is a
      paragraph of text.
    </Paragraph>
  </AppColors>
)

TextStory.story = {
  name: 'Text (All)',
}
