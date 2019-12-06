/* eslint-disable react/no-children-prop */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import get from './utils/get'
import { fetchAllHero, changeTheme } from './lib/actions'
import HeroLists from './pages/HeroLists'
import HeroProfile from './pages/HeroProfile'
import ContainerWithRedux from './ContainerWithRedux'
import {
  Container,
  ThemeButton,
  ThemeButtonCircle,
  ThemeButtonText,
  GlobalCSS,
} from './styledRoots'
import IconImage from './static/images/main_icon.ico'

function createSiteIconLink(iconUrl) {
  const head = document.getElementsByTagName('head')[0]
  const link = document.createElement('link')
  link.rel = 'Shortcut Icon'
  link.type = 'image/x-icon'
  link.href = iconUrl
  head.appendChild(link)
}

const App = () => {
  const theme = useSelector((state) => (get(state, 'currentTheme', 'light')))
  const dispatch = useDispatch()
  useEffect(() => {
    createSiteIconLink(IconImage)
    fetchAllHero(dispatch)
  }, [])
  function handleThemeChange() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    changeTheme(dispatch, newTheme)
  }
  return (
    <>
      <BrowserRouter>
        <GlobalCSS theme={theme} />
        <Container>
          <Route
            path="/"
            component={HeroLists}
          />
          <Route
            path="/heroes/:heroId([1-4]{1})"
            component={HeroProfile}
          />
          <ThemeButton
            onClick={handleThemeChange}
            type="button"
            theme={theme}
          >
            <ThemeButtonText theme={theme}>
              {theme === 'light' ? '深色主題' : '淺色主題'}
            </ThemeButtonText>
            <ThemeButtonCircle theme={theme} />
          </ThemeButton>
        </Container>
      </BrowserRouter>
    </>
  )
}

const Root = () => (
  <ContainerWithRedux>
    <App />
  </ContainerWithRedux>
)

ReactDOM.render(<Root />, document.getElementById('root'))
