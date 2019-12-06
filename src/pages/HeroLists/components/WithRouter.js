import React from 'react'
import { useSelector } from 'react-redux'
import get from '../../../utils/get'
import { profileRouteRegex, heroesRouteRegex, homeRouteRegex } from '../../../lib/helpers/RouteTest'

function getPathname(location) {
  return get(location, 'pathname', '/')
}

const WithRouter = (Component) => ({ history, location }) => {
  const allHero = useSelector((state) => get(state, 'allHero', []))
  function getAllHeroData() {
    return {
      isLoading: allHero.length === 0,
      data: allHero,
    }
  }
  const pathname = getPathname(location)
  const isProfileRoute = profileRouteRegex(pathname)
  const isHeroesRoute = heroesRouteRegex(pathname)
  const isHomeRoute = homeRouteRegex(pathname)
  const canRenderHeroLists = isProfileRoute || isHeroesRoute || isHomeRoute
  return canRenderHeroLists ? (
    <Component
      history={history}
      pathname={pathname}
      isLoading={getAllHeroData().isLoading}
      allHeroData={getAllHeroData().data}
    />
  ) : null
}

export default WithRouter
