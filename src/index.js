import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import get from 'lodash/get'
import { fetchAllHero } from './lib/actions'
import HeroLists from './pages/HeroLists'
import HeroProfile from './pages/HeroProfile'
import ThemeContext from './themeContext'
import RootContainer from './RootContainer'
import { Container, LinkSection, ThemeButton } from './styledRoots'
import IconImage from './static/images/main_icon.ico'

const Root = ({ isCorrectHash, createSiteIconLink }) => {
  const { theme, handleThemeChange } = useContext(ThemeContext)
  function getAllHeroData() {
    const result = useSelector((state) => get(state, 'allHero', []))
    return {
      isLoading: result.length === 0,
      data: result,
    }
  }
  const dispatch = useDispatch()
  useEffect(() => {
    createSiteIconLink(IconImage)
    fetchAllHero(dispatch)
  }, [])
  function getHashOnLocation(location) {
    return get(location, 'hash', '')
  }
  return (
    <Container theme={theme}>
      <BrowserRouter>
        <Route
          path="/"
          component={({ history }) => (
            <HeroLists
              history={history}
              isLoading={getAllHeroData().isLoading}
              allHeroData={getAllHeroData().data}
            />
          )}
        />
        <Route
          path="/"
          component={({ location }) => (isCorrectHash('#/heroes/profile', getHashOnLocation(location)) ? <HeroProfile /> : null)}
        />
        <ThemeButton
          onClick={handleThemeChange}
          type="button"
          theme={theme}
        >
          Click To Switch Theme
        </ThemeButton>
        <LinkSection theme={theme}>
          <Link to={{ pathname: '/', hash: '#/heroes' }}>To Hero</Link>
          <Link to={{ pathname: '/', hash: '#/heroes/profile' }}>To HeroProfile</Link>
        </LinkSection>
      </BrowserRouter>
    </Container>
  )
}

const App = RootContainer(Root)

ReactDOM.render(<App />, document.getElementById('root'))
