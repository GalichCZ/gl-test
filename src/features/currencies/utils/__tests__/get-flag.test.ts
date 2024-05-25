import { getFlag } from '../get-flag.ts'

describe('getFlag', () => {
  test('should return the flag path for "ad"', () => {
    expect(getFlag('ad')).toBe('/flags/ad.png')
  })

  test('should return the flag path for "ae"', () => {
    expect(getFlag('ae')).toBe('/flags/ae.png')
  })

  test('should return the flag path for "af"', () => {
    expect(getFlag('af')).toBe('/flags/af.png')
  })

  test('should return the flag path for "ag"', () => {
    expect(getFlag('ag')).toBe('/flags/ag.png')
  })

  test('should return the flag path for "al"', () => {
    expect(getFlag('al')).toBe('/flags/al.png')
  })

  test('should return undefined for an unknown country code', () => {
    expect(getFlag('unknown')).toBeUndefined()
  })

  test('should return undefined for an empty country code', () => {
    expect(getFlag('')).toBeUndefined()
  })
})
