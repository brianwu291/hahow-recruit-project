import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalCSS = createGlobalStyle`
  *  {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
  }
  html {
    font-family: "HelveticaNeue", "Helvetica" , "Arial" , "sans-serif";
    font-size: 10px;
  }
  a, button {
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
  `
  return (
    <>
      <GlobalCSS theme={theme} />
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
  background-color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  position: fixed;
  right: 6%;
  bottom: 3%;
  width: 90px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid;
  border-color: darkgray;
  padding: 0;
`

export const ThemeButtonCircle = styled.span`
  background-color: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
  width: 28px;
  height: 28px;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  transform: ${({ theme }) => (theme === 'light' ? 'translateX(45px)' : 'translateX(-45px)')};
  margin-right: ${({ theme }) => (theme === 'light' ? '30px' : '-30px')};
  transition: 1s;
`
