import { allHeroReducer, singleHeroReducer } from '../heroReducer'
import * as actionTypes from '../../actions/types'
import { mockData } from './mockData'

describe('HeroReducer', () => {
  const initStateForAllHero = []
  it('should return correct state on fetching all reducer', () => {
    const action = {
      type: actionTypes.FETCH_ALL_HERO,
      payload: mockData.allHeroData
    }
    const newState = allHeroReducer(initStateForAllHero, action)
    newState.forEach(state => {
      switch (state.id) {
        case 1:
          expect(state.name).toBe('Daredevil')
          expect(state.image).toBe('http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg')
          break
        case 2:
          expect(state.name).toBe("Thor")
          expect(state.image).toBe("http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg")
          break
        case 3:
          expect(state.name).toBe("Iron Man")
          expect(state.image).toBe("http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg")
          break
        case 4:
          expect(state.name).toBe("Hulk")
          expect(state.image).toBe('http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg')
          break
        default:
          break
      }
    })
  })
  it('should return correct data on fetching specific hero by heroId', () => {
    const initSateForSingleHero = {}
    function passSingleHeroActionToReducer(heroId) {
      const hero = mockData.allHeroData[heroId - 1]
      const action = {
        type: actionTypes.FETCH_HERO_BY_ID,
        payload: {
          heroName: hero.name,
          heroId: hero.id,
          ...mockData.singleHeroData[heroId],
        }
      }
      return singleHeroReducer(initSateForSingleHero, action)
    }
    expect(passSingleHeroActionToReducer(3).heroName).toBe('Iron Man')
    expect(passSingleHeroActionToReducer(3).heroId).toBe("3")
    expect(passSingleHeroActionToReducer(3).str).toBe(6)
    expect(passSingleHeroActionToReducer(3).int).toBe(9)
    expect(passSingleHeroActionToReducer(3).agi).toBe(6)
    expect(passSingleHeroActionToReducer(3).luk).toBe(9)
  })
})