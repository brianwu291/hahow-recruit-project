import { CHANGE_THEME } from '../actions/types'

const initThemeState = 'light'

export default (state = initThemeState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload
    default:
      return state
  }
}
