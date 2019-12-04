import { combineReducers } from 'redux'
import {
  allHeroReducer,
  singleHeroReducer,
  updateHeroReducer,
} from './heroReducer'

export default combineReducers({
  allHero: allHeroReducer,
  currentHero: singleHeroReducer,
  updateHeroStatus: updateHeroReducer,
})
