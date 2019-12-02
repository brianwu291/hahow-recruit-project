import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import get from 'lodash/get'
import { fetchAllHero } from './lib/actions'
import { SpinnerWithHistoryPush } from './lib/helpers/HOC'
import HeroLists from './pages/HeroLists'
import HeroProfile from './pages/HeroProfile'
import ThemeContext from './themeContext'
import RootContainer from './RootContainer'
import { Container, LinkSection, ThemeButton } from './styledRoots'
import IconImage from './static/images/main_icon.ico'

const Root = ({ isCorrectHash, createSiteIconLink }) => {
  const { theme, handleThemeChange } = useContext(ThemeContext)
  const allHeroDataLength = useSelector((state) => get(state, 'allHero', []).length)
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
          component={({ location, history }) => (
            isCorrectHash('', get(location, 'hash', ''))
              ? (
                <SpinnerWithHistoryPush
                  history={history}
                  allHeroDataLength={allHeroDataLength}
                  hash={get(location, 'hash', '')}
                />
              ) : null)}
        />
        <Route
          path="/"
          component={({ location }) => (isCorrectHash('#/heroes', getHashOnLocation(location)) ? <HeroLists /> : null)}
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
