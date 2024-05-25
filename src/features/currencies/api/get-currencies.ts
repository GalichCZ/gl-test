import currencies from '@/assets/fx.json'
import { Currency, CurrencyData } from '@/features/currencies/types'

export type CurrencyResponse = {
  baseCurrency: string
  currencies: Currency[]
}
export const getCurrencies = async (
  searchParam?: string
): Promise<CurrencyResponse> => {
  return new Promise((resolve) => {
    const { fx, baseCurrency }: CurrencyData = currencies

    if (searchParam) {
      setTimeout(() => {
        resolve({
          baseCurrency: baseCurrency,
          currencies: fx.filter(({ currency }) =>
            currency.toLowerCase().includes(searchParam)
          ),
        })
      }, 200)
    }

    setTimeout(
      () =>
        resolve({
          baseCurrency,
          currencies: fx,
        }),
      200
    )
  })
}
