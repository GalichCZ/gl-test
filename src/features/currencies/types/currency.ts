export interface Currency {
  currency: string
  precision: number
  nameI18N?: string
  exchangeRate?: ExchangeRate
}

export type ExchangeRate = {
  buy: number
  sell: number
}
