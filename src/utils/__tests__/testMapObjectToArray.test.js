import mapObjectToArray from '../mapObjectToArray'

describe('mapObjectToArray test', () => {
  it('should return correct array', () => {
    const obj = {
      firstName: 'brian',
      lastName: 'Wu',
      id: 234,
      address: 'edededed'
    }
    expect(mapObjectToArray(obj).length).toBe(4)
    mapObjectToArray(obj).forEach(item => {
      expect(typeof item).toBe('object')
      const key = Object.keys(item)
      expect(obj[key[0]]).toBe(obj[key[0]])
    })
  })
})
