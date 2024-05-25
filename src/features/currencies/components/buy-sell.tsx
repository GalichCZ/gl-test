import { ExchangeRate } from '@/features/currencies/types'
import { FC } from 'react'
import { formatCurrency } from '@/features/currencies/utils/format-currency.ts'

interface BuySellProps {
  baseCurrency?: string
  precision: number
  exchangeRate?: ExchangeRate
}

const BuySell: FC<BuySellProps> = ({ exchangeRate, precision }) => {
  if (!exchangeRate) {
    return <p className="font-bold">No Data</p>
  }

  const formattedRateBuy = formatCurrency({
    amount: exchangeRate?.buy,
    precision,
    locale: 'en-US',
  })

  const formattedRateSell = formatCurrency({
    amount: exchangeRate?.sell,
    precision,
    locale: 'en-US',
  })

  return (
    <div className="text-right my-auto">
      <p className="font-bold">Buy {formattedRateBuy}</p>
      <p className="font-bold">Sell {formattedRateSell}</p>
    </div>
  )
}

export default BuySell
