import React from 'react'
import styled from 'styled-components'

export const Container = ({ children, theme }) => {
  const Wrapper = styled.div`
    background-color: ${theme === 'light' ? 'azure' : 'black'}
  `
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export const LinkSection = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: ${({ theme = 'light' }) => (theme === 'light' ? 'black' : 'white')};
  }
`
export const ThemeButton = styled.button`
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')}
`
