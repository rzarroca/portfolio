import { getColor } from './getColor'

describe('Helper getColor', () => {
  test('must return a string', () => {
    const result = getColor()
    expect(typeof result).toEqual('string')
  })

  test('must return clear if its not a valid color', () => {
    const result = getColor({ color: 'lalala' })
    expect(result).toBe('clear')
  })
})
