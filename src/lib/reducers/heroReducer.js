import {
  FETCH_ALL_HERO,
  FETCH_SINGLE_HERO_BY_ID,
  UPDATE_HERO_BY_ID,
} from '../actions/types'

const initStateForAllHero = []
const initSateForSingleHero = {}
const initStateForUpdateHero = ''

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
    case FETCH_SINGLE_HERO_BY_ID:
      return action.payload
    default:
      return state
  }
}

export const updateHeroReducer = (state = initStateForUpdateHero, action) => {
  switch (action.type) {
    case UPDATE_HERO_BY_ID:
      return action.payload
    default:
      return state
  }
}
