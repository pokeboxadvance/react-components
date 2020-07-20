import React from 'react'

import { H1, H2, H3, Paragraph } from '../src/'

export default {
  title: 'Text',
}

export const H1Story = () => <H1>This is Heading 1</H1>

H1Story.story = {
  name: 'H1',
}

export const H2Story = () => <H2>This is Heading 2</H2>

H2Story.story = {
  name: 'H2',
}

export const H3Story = () => <H3>This is Heading 3</H3>

H3Story.story = {
  name: 'H3',
}

export const ParagraphStory = () => (
  <Paragraph>
    This is a paragraph of text. This is a paragraph of text. This is a
    paragraph of text. This is a paragraph of text. This is a paragraph of text.
    This is a paragraph of text. This is a paragraph of text. This is a
    paragraph of text.
  </Paragraph>
)

ParagraphStory.story = {
  name: 'Paragraph',
}

export const TextStory = () => (
  <>
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
  </>
)

TextStory.story = {
  name: 'Text (All)',
}
