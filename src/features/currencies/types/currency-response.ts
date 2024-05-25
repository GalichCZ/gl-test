import { Currency } from './currency.ts'

export interface CurrencyData {
  institute: number
  lastUpdated: string
  comparisonDate: string
  baseCurrency: string
  fx: Currency[]
}
