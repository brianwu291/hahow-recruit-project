import { heroesRouteRegex, profileRouteRegex } from '../index'

describe('Route test on every page', () => {
  it('should return correct boolean on heroesRouteRegex', () => {
    expect(heroesRouteRegex('/heroes')).toBe(true)
    expect(heroesRouteRegex('/heroes/gersgaw')).toBe(false)
  })
  it('should return correct boolean on profileRouteRegex', () => {
    expect(profileRouteRegex('/heroes/profile/1')).toBe(true)
    expect(profileRouteRegex('/heroes/profile/2')).toBe(true)
    expect(profileRouteRegex('/heroes/profile/3')).toBe(true)
    expect(profileRouteRegex('/heroes/profile/4')).toBe(true)

    expect(profileRouteRegex('/heroes/profile/0')).toBe(false)
    expect(profileRouteRegex('/heroes/profile/5')).toBe(false)
    expect(profileRouteRegex('/heroes/profile/10')).toBe(false)
    expect(profileRouteRegex('/heroes/profile/100')).toBe(false)
  })
})
