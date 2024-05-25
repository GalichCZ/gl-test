import { getCountryCode } from '../get-country-code'

describe('getCountryCode', () => {
  test('should return "us" for "USD"', () => {
    expect(getCountryCode('USD')).toBe('us')
  })

  test('should handle empty string input', () => {
    expect(getCountryCode('')).toBe('')
  })

  test('should handle short string input "A"', () => {
    expect(getCountryCode('A')).toBe('a')
  })
})
