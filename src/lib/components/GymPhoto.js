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

const normalStyle = css`
  ${borderWidth('10px')}
  ${color('colors.main')}
`

const exStyle = css`
  ${borderWidth('15px')}
  ${color('colors.dark')}
`

const Image = styled.img`
  border-radius: 100vw;
  height: 100%;
  width: 100%;
`

const Container = styled.div`
${marginStyle}
  position: relative;
  border-radius: 100vw;
  display: inline-block;
  ${height('200px')}
  ${maxHeight()}
  ${width('200px')}
  ${maxWidth()}
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
  ${({ ex }) => (ex ? exStyle : normalStyle)}
`

export default ({ id, name, ex, borderWidth, ...props }) => (
  <Container role={'img'} alt={name} {...props}>
    <Image
      src={`https://pokeboxadvance.net/assets/gyms/${id}.jpg`}
      alt={name}
    />
    <Border ex={ex} borderWidth={borderWidth} />
  </Container>
)
