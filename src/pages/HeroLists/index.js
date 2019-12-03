import React, { useEffect } from 'react'
import get from 'lodash/get'
import { SpinnerWhileLoading } from '../../lib/helpers/HOC'
import { HeroListsWrapper } from './styled/styledHeroLists'
import HeroCard from './components/HeroCard'
import profileRouteRegex from '../../lib/helpers/RouteTest/profileRouteRegex'

const renderHeroCardLists = (heroData, history) => heroData.map((hero) => (
  <HeroCard
    history={history}
    key={get(hero, 'id', 0)}
    id={get(hero, 'id', 0)}
    image={get(hero, 'image', '')}
    name={get(hero, 'name', '')}
  />
))

const HeroLists = ({ history, allHeroData, hash }) => {
  function pushToHero() {
    if (profileRouteRegex().test(hash) === false) {
      history.push('/#/heroes')
    }
  }
  useEffect(pushToHero, [])
  return (
    <HeroListsWrapper>
      {renderHeroCardLists(allHeroData, history)}
    </HeroListsWrapper>
  )
}

export default SpinnerWhileLoading(HeroLists)
