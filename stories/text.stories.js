import React from 'react'

import { H1, H2, H3, Paragraph, TextPlaceholder, Anchor } from '../src/'

import AppColors from './util/AppColors'

export default {
  title: 'Text',
}

export const TextStory = () => (
  <AppColors>
    <H1 marginBottom={'spaces.between.items'}>This is Heading 1</H1>
    <Paragraph marginBottom={'spaces.between.groups'}>
      A paragraph (from the Ancient Greek παράγραφος, parágraphos, "to write
      beside") is a self-contained unit of discourse in writing dealing with a
      particular point or idea. A paragraph consists of one or more
      sentences.[1] Though not required by the syntax of any language,[citation
      needed] paragraphs are usually an expected part of formal writing, used to
      organize longer prose.{' '}
      <Anchor href={'https://en.wikipedia.org/wiki/Paragraph'}>
        https://en.wikipedia.org/wiki/Paragraph
      </Anchor>
    </Paragraph>
    <H2 marginBottom={'spaces.between.items'}>This is Heading 1.1</H2>
    <Paragraph marginBottom={'spaces.between.groups'}>
      A paragraph (from the Ancient Greek παράγραφος, parágraphos, "to write
      beside") is a self-contained unit of discourse in writing dealing with a
      particular point or idea. A paragraph consists of one or more
      sentences.[1] Though not required by the syntax of any language,[citation
      needed] paragraphs are usually an expected part of formal writing, used to
      organize longer prose.{' '}
      <Anchor href={'https://en.wikipedia.org/wiki/Paragraph'}>
        https://en.wikipedia.org/wiki/Paragraph
      </Anchor>
    </Paragraph>
    <H3 marginBottom={'spaces.between.items'}>This is Heading 1.1.1</H3>
    <Paragraph marginBottom={'spaces.between.groups'}>
      A paragraph (from the Ancient Greek παράγραφος, parágraphos, "to write
      beside") is a self-contained unit of discourse in writing dealing with a
      particular point or idea. A paragraph consists of one or more
      sentences.[1] Though not required by the syntax of any language,[citation
      needed] paragraphs are usually an expected part of formal writing, used to
      organize longer prose.{' '}
      <Anchor href={'https://en.wikipedia.org/wiki/Paragraph'}>
        https://en.wikipedia.org/wiki/Paragraph
      </Anchor>
    </Paragraph>
    <H3 marginBottom={'spaces.between.items'}>This is Heading 1.1.2</H3>
    <TextPlaceholder width={'100%'} />
  </AppColors>
)

TextStory.story = {
  name: 'All',
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
    <H2>This is Heading 1.1</H2>
  </AppColors>
)

H2Story.story = {
  name: 'H2',
}

export const H3Story = () => (
  <AppColors>
    <H3>This is Heading 1.1.1</H3>
  </AppColors>
)

H3Story.story = {
  name: 'H3',
}

export const ParagraphStory = () => (
  <AppColors>
    <Paragraph>
      A paragraph (from the Ancient Greek παράγραφος, parágraphos, "to write
      beside") is a self-contained unit of discourse in writing dealing with a
      particular point or idea. A paragraph consists of one or more
      sentences.[1] Though not required by the syntax of any language,[citation
      needed] paragraphs are usually an expected part of formal writing, used to
      organize longer prose.{' '}
      <Anchor href={'https://en.wikipedia.org/wiki/Paragraph'}>
        https://en.wikipedia.org/wiki/Paragraph
      </Anchor>
    </Paragraph>
  </AppColors>
)

ParagraphStory.story = {
  name: 'Paragraph',
}

export const TextPlaceholderStory = () => (
  <AppColors>
    <TextPlaceholder marginRight={'1rem'} />
    <TextPlaceholder width={'160px'} marginRight={'1rem'} />
    <TextPlaceholder width={'80px'} marginRight={'1rem'} />
  </AppColors>
)

TextPlaceholderStory.story = {
  name: 'Text Placeholder',
}
