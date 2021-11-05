import { getColor } from './getColor'

describe('Helper getColor', () => {
  test('must return a string', () => {
    const result = getColor()
    expect(typeof result).toEqual('string')
  })

  test('must return dark if its not a valid color', () => {
    const result = getColor({ color: 'clear' })
    expect(result).toBe('dark')
  })
})
