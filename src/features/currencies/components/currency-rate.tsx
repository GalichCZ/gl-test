import { FC } from 'react'
import { Currency } from '@/features/currencies/types'
import { getCountryCode } from '@/features/currencies/utils/get-country-code.ts'
import BuySell from '@/features/currencies/components/buy-sell.tsx'
import RowWrap from '@/features/currencies/ui/row-wrap.tsx'
import CurrencyInfo from '@/features/currencies/ui/currency-info.tsx'

interface CurrencyRateProps extends Currency {
  baseCurrency?: string
}

const CurrencyRate: FC<CurrencyRateProps> = ({
  currency,
  exchangeRate,
  precision,
  nameI18N,
}) => {
  const countryCode = getCountryCode(currency)

  return (
    <RowWrap>
      <CurrencyInfo
        currency={currency}
        nameI18N={nameI18N}
        countryCode={countryCode}
      />
      <BuySell precision={precision} exchangeRate={exchangeRate} />
    </RowWrap>
  )
}

export default CurrencyRate
