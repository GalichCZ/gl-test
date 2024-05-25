import { ExchangeRate } from './exchange-rate.ts'

export interface Currency {
  currency: string
  precision: number
  nameI18N?: string
  exchangeRate?: ExchangeRate
}
