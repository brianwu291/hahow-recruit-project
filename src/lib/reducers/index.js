import { combineReducers } from 'redux'
import { allHeroReducer, singleHeroReducer } from './heroReducer'

export default combineReducers({
  allHero: allHeroReducer,
  currentHero: singleHeroReducer,
})
