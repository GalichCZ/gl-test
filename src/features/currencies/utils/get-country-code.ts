export const getCountryCode = (currencyCode: string) => {
  return currencyCode.substring(0, 2).toLowerCase()
}
