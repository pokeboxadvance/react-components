import styled from 'styled-components'
import {
  width,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
} from '@themed-styling/core'

export default styled.span`
  display: inline-block;
  height: 1em;
  ${width('50px')}
  ${margin()}
  ${marginTop()}
  ${marginLeft()}
  ${marginBottom()}
  ${marginRight()}

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
