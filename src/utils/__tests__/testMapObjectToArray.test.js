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
    mapObjectToArray(obj).forEach((item, index) => {
      expect(typeof item).toBe('object')
      const key = Object.keys(item)
      expect(obj[key[0]]).toBe(obj[key[0]])
      switch (index) {
        case 0:
          expect(obj[key[0]]).toBe('brian')
          break
        case 1:
          expect(obj[key[0]]).toBe('Wu')
          break
        case 2:
          expect(obj[key[0]]).toBe(234)
          break
        case 3:
          expect(obj[key[0]]).toBe('edededed')
          break
        default:
          break
      }
    })
  })
})
