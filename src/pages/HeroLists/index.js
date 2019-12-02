import React, { useContext, useEffect } from 'react'
import get from 'lodash/get'
import { SpinnerWhileLoading } from '../../lib/helpers/HOC'
import ThemeContext from '../../themeContext'
import { HeroListsWrapper } from './styledHeroLists'
import HeroCard from './components/HeroCard'

const renderHeroCardLists = (heroData) => heroData.map((hero) => (
  <HeroCard
    key={get(hero, 'id', 0)}
    id={get(hero, 'id', 0)}
    image={get(hero, 'image', '')}
    name={get(hero, 'name', '')}
  />
))

const HeroLists = ({ history, allHeroData }) => {
  const { theme } = useContext(ThemeContext)
  function pushToHero() {
    history.push('/#/heroes')
  }
  useEffect(pushToHero, [])
  return (
    <HeroListsWrapper theme={theme}>
      {renderHeroCardLists(allHeroData)}
    </HeroListsWrapper>
  )
}

export default SpinnerWhileLoading(HeroLists)
