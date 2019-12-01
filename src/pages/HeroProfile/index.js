import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../themeContext'

const HeroProfile = () => {
  const { theme } = useContext(ThemeContext)
  const Cover = styled.div`
    color: ${theme === 'light' ? 'black' : 'white'};
  `
  return (
    <Cover>
      <div>I am single hero</div>
    </Cover>
  )
}

export default HeroProfile
