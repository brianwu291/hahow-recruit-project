import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import ThemeContext from './ThemeContext'
import MainIcon from './static/images/main_icon.ico'

const Container = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const Wrapper = styled.div`
    background-color: ${theme === 'light' ? 'azure' : 'black'}
  `
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Hello = () => {
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
      <img src={MainIcon} alt="dog" />
      <div>I am a image!</div>
    </Cover>
  )
}
const World = () => {
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

const LinkSection = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  }
`

function createSiteIconLink(iconUrl) {
  const head = document.getElementsByTagName('head')
  const link = document.createElement('link')
  link.rel = 'Shortcut Icon'
  link.type = 'image/x-icon'
  link.href = iconUrl
  head[0].appendChild(link)
}

const App = () => {
  const [theme, setTheme] = useState('light')
  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  const noIconLinkInHead = document.getElementsByTagName('link').length === 0
  if (noIconLinkInHead) {
    createSiteIconLink(MainIcon)
  }
  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <Container>
        <BrowserRouter>
          <Route
            path="/"
            component={(props) => {
              const isRightHash = props.location.hash === '#/hello'
              return (isRightHash ? <Hello /> : null)
            }}
          />
          <Route
            path="/"
            component={(props) => {
              const isRightHash = props.location.hash === '#/world'
              return (isRightHash ? <World /> : null)
            }}
          />
          <button onClick={handleThemeChange} type="button">Click To Switch Theme</button>
          <LinkSection theme={theme}>
            <Link to="/">Home</Link>
            <Link to={{ pathname: '/', hash: '#/hello' }}>To Hello</Link>
            <Link to={{ pathname: '/', hash: '#/world' }}>To world</Link>
          </LinkSection>
        </BrowserRouter>
      </Container>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
