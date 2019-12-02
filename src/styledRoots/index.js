import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  *  {
    box-sizing: border-box;
  }
  html {
    font-family: "HelveticaNeue", "Helvetica" , "Arial" , "sans-serif";
  }
  a {
    text-decoration: none;
    outline: none;
  }
  p {
    margin: 0;
  }

`

export const Container = ({ children, theme }) => {
  const Wrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    background-color: ${theme === 'light' ? 'white' : 'black'};
  `
  return (
    <>
      <GlobalCSS />
      <Wrapper>
        {children}
      </Wrapper>
    </>
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
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  background-color: ${({ theme }) => (theme === 'light' ? 'bisque' : 'black')};
`
