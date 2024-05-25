interface FormatCurrencyArgs {
  locale: string
  amount?: number
  precision?: number
}

export const formatCurrency = ({
  locale,
  amount,
  precision,
}: FormatCurrencyArgs) => {
  //JS takes 0 as a false
  if (!amount && amount !== 0) return 'NaN'
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: precision,
  }).format(amount)
}
