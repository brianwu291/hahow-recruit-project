import {
  getAllHero,
  getHeroById,
  patchHero,
} from '../../APIManager'
import {
  FETCH_ALL_HERO,
  FETCH_HERO_BY_ID,
  UPDATE_HERO_BY_ID,
} from './types'

export const fetchAllHero = (dispatch) => getAllHero().then((allHeroData) => (
  dispatch({
    type: FETCH_ALL_HERO,
    payload: allHeroData,
  })
))

export const fetchHeroById = (dispatch, { heroId = 0, heroName = '' }) => {
  if (heroId === 0) { return }
  getHeroById(heroId).then((heroData) => {
    const dataWithNameAndId = {
      ...heroData,
      heroName,
      heroId,
    }
    dispatch({
      type: FETCH_HERO_BY_ID,
      payload: dataWithNameAndId,
    })
  })
}

export const updateHeroById = (dispatch, { heroId, value }) => {
  if (heroId === 0) { return }
  patchHero(heroId, value).then((heroData) => {
    dispatch({
      type: UPDATE_HERO_BY_ID,
      payload: heroData,
    })
  })
}
