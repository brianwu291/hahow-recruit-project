import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../ThemeContext'

const HeroProfile = () => {
  const { theme } = useContext(ThemeContext)
  const Cover = styled.div`
    color: ${theme === 'light' ? 'black' : 'white'};
  `
  return (
    <Cover>
      <div>I am not Image</div>
    </Cover>
  )
}

export default HeroProfile
