import React from 'react'
import styled, { css } from 'styled-components'
import {
  color,
  fontSize,
  height,
  maxHeight,
  maxWidth,
  width,
  borderWidth,
} from '@themed-styling/core'

import marginStyle from '../mixins/marginStyle'

const normalColor = css`
  ${color('colors.main')}
`

const exColor = css`
  ${color('colors.dark')}
`

const Container = styled.div`
  ${marginStyle}
  position: relative;
  border-radius: 100vw;
  display: inline-block;
  height: ${({ size = '200px' }) => size};
  width: ${({ size = '200px' }) => size};
  ${({ ex }) => (ex ? exColor : normalColor)}
`

const Image = styled.img`
  border-radius: 100vw;
  height: 100%;
  width: 100%;
  z-index: 1;
`

const normalBorder = css`
  ${({ size }) => size && `border-width: calc(${size} / 20);`}
`

const exBorder = css`
  ${({ size }) => size && `border-width: calc(${size} / 14);`}
`

const Border = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100vw;
  border-style: solid;
  border-color: currentcolor;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  z-index: 2;
  ${({ ex }) => (ex ? exBorder : normalBorder)}
  ${borderWidth()}
`

export default ({
  src,
  id,
  name,
  ex,
  borderWidth,
  size = '200px',
  ...props
}) => (
  <Container ex={ex} size={size} {...props}>
    <Image
      src={src || `https://pokeboxadvance.net/assets/gyms/${id}.jpg`}
      alt={name}
    />
    <Border ex={ex} size={size} borderWidth={borderWidth} />
  </Container>
)
