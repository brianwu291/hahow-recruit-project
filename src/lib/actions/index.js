import {
  getAllHero,
  getHeroById,
  // patchHero,
} from '../../APIManager'
import { FETCH_ALL_HERO, FETCH_HERO_BY_ID } from './types'

export const fetchAllHero = (dispatch) => {
  getAllHero().then((allHeroData) => {
    dispatch({
      type: FETCH_ALL_HERO,
      payload: allHeroData,
    })
  })
}

export const fetchHeroById = (dispatch, heroId = 0) => () => {
  if (heroId === 0) { return }
  getHeroById(heroId).then((heroData) => {
    dispatch({
      type: FETCH_HERO_BY_ID,
      payload: heroData,
    })
  })
}
