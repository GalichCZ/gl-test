import CurrencyRate from '@/features/currencies/components/currency-rate.tsx'
import { useGetCurrencies } from '@/features/currencies/hooks/use-get-currencies.ts'
import Skeleton from '@/features/currencies/ui/skeleton.tsx'
import { useAppSelector } from '@/hooks/use-app-selector.ts'
import { useEffect } from 'react'
import NotFound from '@/ui/not-found.tsx'
const Currencies = () => {
  const { data, loading, error, refetch } = useGetCurrencies()
  const searchValue = useAppSelector(({ search }) => search.value)

  const noCurrencies = data?.currencies.length === 0

  useEffect(() => {
    refetch(searchValue)
  }, [searchValue])

  if (error) {
    return (
      <div>
        Oops, something went wrong.
        <br /> Try again later
      </div>
    )
  }

  if (loading) {
    return (
      <div className="p-2">
        <Skeleton />
      </div>
    )
  }

  return (
    <div className="p-3 h-full w-full">
      {noCurrencies ? (
        <NotFound />
      ) : (
        data?.currencies.map(
          ({ currency, exchangeRate, nameI18N, precision }) => (
            <CurrencyRate
              currency={currency}
              precision={precision}
              exchangeRate={exchangeRate}
              nameI18N={nameI18N}
              key={currency}
            />
          )
        )
      )}
    </div>
  )
}

export default Currencies
