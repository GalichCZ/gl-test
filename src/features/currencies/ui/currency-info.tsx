import Flag from '@/features/currencies/ui/flag.tsx'
import { FC } from 'react'

interface CurrencyInfoProps {
  currency: string
  countryCode: string
  nameI18N?: string
}
const CurrencyInfo: FC<CurrencyInfoProps> = ({
  currency,
  nameI18N,
  countryCode,
}) => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex">
        <Flag countryCode={countryCode} />
        <p className="ml-2 font-bold">{currency}</p>
      </div>
      {nameI18N && <p className="mt-2">{nameI18N}</p>}
    </div>
  )
}

export default CurrencyInfo
