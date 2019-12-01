import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../themeContext'

const Cover = styled.div`
color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
> img {
  width: 100px;
  height: 100px;
}
`
const HeroLists = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Cover theme={theme}>
      <div>We are all hero!</div>
    </Cover>
  )
}

export default HeroLists
