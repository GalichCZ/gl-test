import { formatCurrency } from '../format-currency'

describe('formatCurrency', () => {
  test('formats currency with default precision', () => {
    const result = formatCurrency({
      locale: 'en-US',
      amount: 1234.56,
    })
    expect(result).toBe('1,234.56')
  })

  test('formats currency with specified precision', () => {
    const result = formatCurrency({
      locale: 'en-US',
      amount: 1234.567,
      precision: 1,
    })
    expect(result).toBe('1,234.6')
  })

  test('formats currency with no amount', () => {
    const result = formatCurrency({ locale: 'en-US' })
    expect(result).toBe('NaN')
  })

  test('formats currency with different locale', () => {
    const result = formatCurrency({
      locale: 'de-DE',
      amount: 1234.56,
    })
    expect(result).toBe('1.234,56')
  })

  test('formats currency with different locale and precision', () => {
    const result = formatCurrency({
      locale: 'de-DE',
      amount: 1234.567,
      precision: 2,
    })
    expect(result).toBe('1.234,57')
  })

  test('formats currency without currency code', () => {
    const result = formatCurrency({
      locale: 'en-US',
      amount: 1234.56,
      precision: 2,
    })
    expect(result).toBe('1,234.56')
  })

  test('formats currency with zero amount', () => {
    const result = formatCurrency({
      locale: 'en-US',
      amount: 0,
    })
    expect(result).toBe('0')
  })

  test('formats currency with negative amount', () => {
    const result = formatCurrency({
      locale: 'en-US',
      amount: -1234.56,
    })
    expect(result).toBe('-1,234.56')
  })

  test('formats currency with very large amount', () => {
    const result = formatCurrency({
      locale: 'en-US',
      amount: 1234567890.12,
    })
    expect(result).toBe('1,234,567,890.12')
  })

  test('formats currency with no currency and no precision', () => {
    const result = formatCurrency({ locale: 'en-US', amount: 1234.56 })
    expect(result).toBe('1,234.56')
  })

  test('formats currency with no amount but with currency', () => {
    const result = formatCurrency({ locale: 'en-US' })
    expect(result).toBe('NaN')
  })
})
