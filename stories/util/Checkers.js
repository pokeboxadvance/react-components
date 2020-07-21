import React from 'react'

import checkers from './checkers.svg'

const Checkers = createGlobalStyle`
  body {
    background: url(${checkers});
    background-repeat: repeat;
    background-attachment: fixed;
  }
`
export default ({ children }) => (
  <>
    {children}
    <Checkers />
  </>
)
