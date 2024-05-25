import { useCallback, useEffect, useState } from 'react'
import {
  CurrencyResponse,
  getCurrencies,
} from '@/features/currencies/api/get-currencies.ts'

export const useGetCurrencies = () => {
  const [data, setData] = useState<CurrencyResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async (searchParam?: string) => {
    setLoading(true)
    setError(null)
    try {
      const result = await getCurrencies(searchParam)
      setData(result)
    } catch (error) {
      setError('Failed to fetch currencies.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}
