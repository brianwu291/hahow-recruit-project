import get from '../get'

describe('Get function test', () => {
  it('should return correct value', () => {
    const obj = {
      firstName: 'brian',
      lastName: 'Wu',
      id: 234,
      address: 'edededed'
    }
    expect(get(obj, 'firstName')).toBe('brian')
    expect(get(obj, 'first', 'default')).toBe('default')
  })
})