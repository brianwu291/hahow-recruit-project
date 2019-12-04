import {
  getAllHero,
  getHeroById,
  patchHero,
} from '../../APIManager'
import {
  FETCH_ALL_HERO,
  FETCH_SINGLE_HERO_BY_ID,
  UPDATE_HERO_BY_ID,
} from './types'

export const fetchAllHero = (dispatch) => getAllHero().then((allHeroData) => (
  dispatch({
    type: FETCH_ALL_HERO,
    payload: allHeroData,
  })
))

export const fetchHeroById = (dispatch, heroId = 0) => {
  if (heroId === 0) { return }
  getHeroById(heroId).then((heroData) => {
    const heroDataWithId = {
      heroId,
      ...heroData,
    }
    dispatch({
      type: FETCH_SINGLE_HERO_BY_ID,
      payload: heroDataWithId,
    })
  })
}

export const updateHeroById = (dispatch, { heroId, value }) => {
  if (heroId === 0) { return }
  patchHero(heroId, value).then((msg) => {
    dispatch({
      type: UPDATE_HERO_BY_ID,
      payload: msg,
    })
  })
}
