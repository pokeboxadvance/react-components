import styled from 'styled-components'

import anchorStyle from '../mixins/anchorStyle'

export default styled.a`
  ${anchorStyle}
  text-decoration: underline;

  /*&:not(:link):hover,
  &:not(:link):focus,
  &:not(:link):active {
    filter: grayscale(100%);
    cursor: not-allowed;
  }*/
`
