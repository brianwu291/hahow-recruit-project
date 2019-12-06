import { combineReducers } from 'redux'
import {
  allHeroReducer,
  singleHeroReducer,
  updateHeroReducer,
} from './heroReducer'
import themeReducer from './themeReducer'

export default combineReducers({
  allHero: allHeroReducer,
  currentHero: singleHeroReducer,
  updateHeroStatus: updateHeroReducer,
  currentTheme: themeReducer,
})
