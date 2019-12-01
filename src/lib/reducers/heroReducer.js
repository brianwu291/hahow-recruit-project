import { FETCH_ALL_HERO, FETCH_HERO_BY_ID } from '../actions/types'

const initStateForAllHero = []
const initSateForSingleHero = {}

export const allHeroReducer = (state = initStateForAllHero, action) => {
  switch (action.type) {
    case FETCH_ALL_HERO:
      return action.payload
    default:
      return state
  }
}

export const singleHeroReducer = (state = initSateForSingleHero, action) => {
  switch (action.type) {
    case FETCH_HERO_BY_ID:
      return action.payload
    default:
      return state
  }
}
