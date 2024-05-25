import { useAppDispatch } from '@/hooks/use-app-dispatch.ts'
import { setSearchValue } from '@/store/slices/search-slice.ts'
import { ChangeEvent, useEffect, useRef } from 'react'
import { useDebounce } from '@/hooks/use-debounce.ts'
import { searchParamHandler } from '@/features/search/utils/search-param-handler.ts'
const Search = () => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandler = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value))
    searchParamHandler(e.target.value)
  }, 200)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const searchParam = params.get('q')
    if (searchParam) {
      dispatch(setSearchValue(searchParam))
      if (inputRef.current) {
        inputRef.current.value = searchParam
      }
    }
  }, [])

  return (
    <div className="sticky top-0 bg-blue-300 px-3 py-2 flex items-center mb-2">
      <p className="text-white">Search</p>
      <input
        ref={inputRef}
        onChange={onChangeHandler}
        className="border-[1px] border-gray-200 rounded ml-2 pl-1"
        type="text"
      />
    </div>
  )
}

export default Search
