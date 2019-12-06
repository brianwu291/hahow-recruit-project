import React, { useEffect } from 'react'
import { compose } from 'redux'
import get from '../../utils/get'
import { SpinnerWhileLoading } from '../../lib/helpers/HOC'
import { profileRouteRegex } from '../../lib/helpers/RouteTest'
import WithRouter from './components/WithRouter'
import { HeroListsWrapper } from './styled/styledHeroLists'
import HeroCard from './components/HeroCard'

const enhance = compose(
  WithRouter,
  SpinnerWhileLoading,
)

const renderHeroCardLists = (heroData, history, getIsSelectedHero) => heroData.map((hero) => {
  const isSelected = getIsSelectedHero(get(hero, 'id', 0))
  return (
    <HeroCard
      isSelected={isSelected}
      history={history}
      key={get(hero, 'id', 0)}
      id={get(hero, 'id', 0)}
      image={get(hero, 'image', '')}
      name={get(hero, 'name', '')}
    />
  )
})

const HeroLists = ({ history, allHeroData, pathname }) => {
  function getIsSelectedHero(heroId) {
    const isProfileRoute = profileRouteRegex(pathname)
    return isProfileRoute && pathname.includes(heroId)
  }
  function pushToHeroWhenAtRoot() {
    if (pathname === '/') { history.push('/heroes') }
  }
  useEffect(pushToHeroWhenAtRoot, [pathname])
  return (
    <HeroListsWrapper>
      {renderHeroCardLists(allHeroData, history, getIsSelectedHero)}
    </HeroListsWrapper>
  )
}

export default enhance(HeroLists)
