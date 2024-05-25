import { FC } from 'react'
import { getFlag } from '@/features/currencies/utils/get-flag.ts'

interface FlagProps {
  countryCode: string
}

const Flag: FC<FlagProps> = ({ countryCode }) => {
  const flag = getFlag(countryCode)

  if (!flag) {
    return (
      <div className="w-[30px] h-[24px] border-2 border-black text-center">
        NA
      </div>
    )
  }

  return (
    <img src={flag} width="30" height="30" alt={`Flag of ${countryCode}`} />
  )
}

export default Flag
