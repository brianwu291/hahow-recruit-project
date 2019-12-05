import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import mediaQuery from '../lib/helpers/mediaQuery'

const GlobalCSS = createGlobalStyle`
  *  {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => (theme === 'light' ? '#FCFCFC' : 'black')};
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
    padding: 5rem 0;
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
  cursor: pointer;
  background-color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  position: fixed;
  top: 3%;
  right: 6%;
  bottom: 3%;
  width: 90px;
  height: 30px;
  border-radius: 20px;
  border: 0;
  padding: 0;
`
export const ThemeButtonText = styled.span`
  position: relative;
  top: ${({ theme }) => (theme === 'light' ? '6px' : '-10px')};
  right: ${({ theme }) => (theme === 'light' ? '10px' : '-10px')};
  left: ${({ theme }) => (theme === 'light' ? '-10px' : '10px')};
  color: ${({ theme }) => (theme === 'light' ? 'white' : 'black')};
`

export const ThemeButtonCircle = styled.span`
  background-color: darkorange;
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  right: ${({ theme }) => (theme === 'light' ? '0' : '24px')};
  bottom: ${({ theme }) => (theme === 'light' ? '17px' : '0')};
  transform: ${({ theme }) => (theme === 'light' ? 'translateX(45px)' : 'translateX(-45px)')};
  margin-right: ${({ theme }) => (theme === 'light' ? '30px' : '-30px')};
  transition: 1s;
`
