import { heroesRouteRegex, profileRouteRegex } from '../index'

describe('Route test on every page', () => {
  it('should return correct boolean on heroesRouteRegex', () => {
    expect(heroesRouteRegex('/heroes')).toBe(true)
    expect(heroesRouteRegex('/heroes/gersgaw')).toBe(false)
  })
  it('should return correct boolean on profileRouteRegex', () => {
    expect(profileRouteRegex('/heroes/1')).toBe(true)
    expect(profileRouteRegex('/heroes/2')).toBe(true)
    expect(profileRouteRegex('/heroes/3')).toBe(true)
    expect(profileRouteRegex('/heroes/4')).toBe(true)

    expect(profileRouteRegex('/heroes/0')).toBe(false)
    expect(profileRouteRegex('/heroes/5')).toBe(false)
    expect(profileRouteRegex('/heroes/10')).toBe(false)
    expect(profileRouteRegex('/heroes/100')).toBe(false)
  })
})
