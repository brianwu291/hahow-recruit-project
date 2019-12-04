import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import get from 'lodash/get'
import { fetchAllHero } from './lib/actions'
import HeroLists from './pages/HeroLists'
import HeroProfile from './pages/HeroProfile'
import ThemeContext from './themeContext'
import RootContainer from './RootContainer'
import { profileRouteRegex, heroesRouteRegex, homeRouteRegex } from './lib/helpers/RouteTest'
import { Container, ThemeButton, ThemeButtonCircle } from './styledRoots'
import IconImage from './static/images/main_icon.ico'

const Root = ({ createSiteIconLink }) => {
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
  function getPathname(location) {
    return get(location, 'pathname', '/')
  }
  return (
    <Container theme={theme}>
      <BrowserRouter>
        <Route
          path="/"
          component={({ history, location }) => {
            const pathname = getPathname(location)
            const isProfileRoute = profileRouteRegex(pathname)
            const isHeroesRoute = heroesRouteRegex(pathname)
            const isHomeRoute = homeRouteRegex(pathname)
            const canRenderHeroLists = isProfileRoute || isHeroesRoute || isHomeRoute
            return canRenderHeroLists ? (
              <HeroLists
                history={history}
                pathname={pathname}
                isLoading={getAllHeroData().isLoading}
                allHeroData={getAllHeroData().data}
              />
            ) : null
          }}
        />
        <Route
          path="/heroes/profile/:heroId([1-4]{1})"
          component={({ match }) => {
            const heroId = get(match, 'params.heroId', 1)
            return <HeroProfile heroId={heroId} />
          }}
        />
      </BrowserRouter>
      <ThemeButton
        onClick={handleThemeChange}
        type="button"
        theme={theme}
      >
        <ThemeButtonCircle theme={theme} />
      </ThemeButton>
    </Container>
  )
}

const App = RootContainer(Root)

ReactDOM.render(<App />, document.getElementById('root'))
