/* eslint-disable no-param-reassign */
import get from '../../utils/get'
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

export const fetchAllHero = (dispatch) => getAllHero().then((allHeroData) => {
  function addHttpsToImageWithoutSSL() {
    return allHeroData.map((hero) => {
      const originImgSrc = get(hero, 'image', '')
      if (originImgSrc.includes('https') === false) {
        const cutHttp = originImgSrc.substring(4)
        hero.image = `https${cutHttp}`
      }
      return hero
    })
  }
  dispatch({
    type: FETCH_ALL_HERO,
    payload: addHttpsToImageWithoutSSL(),
  })
})

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

export const updateHeroById = (dispatch, { heroId = '', value }) => {
  if (heroId === '') { return }
  patchHero(heroId, value).then((msg) => {
    dispatch({
      type: UPDATE_HERO_BY_ID,
      payload: msg,
    })
    if (msg === 'OK') {
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
  })
}
