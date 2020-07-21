import styled from 'styled-components'
import {
  width,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
} from '@themed-styling/core'

import noMargin from '../mixins/noMargin'

export default styled.span`
  ${noMargin}
  display: inline-block;
  height: 1em;
  ${width('50px')}

  background: currentcolor;

  @keyframes placeholder {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: placeholder;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-direction: alternate;
`
