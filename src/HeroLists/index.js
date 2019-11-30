import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../ThemeContext'

const HeroLists = () => {
  const { theme } = useContext(ThemeContext)
  const Cover = styled.div`
    color: ${theme === 'light' ? 'black' : 'white'};
    > img {
      width: 100px;
      height: 100px;
    }
  `
  return (
    <Cover>
      <div>I am a image!</div>
    </Cover>
  )
}

export default HeroLists
