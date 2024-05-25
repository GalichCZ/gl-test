import flags from '@/assets/flags.json'
import { FlagsData } from '@/features/currencies/types'

const flagsData: FlagsData = flags

export const getFlag = (countryCode: string) => {
  return flagsData[countryCode]
}
