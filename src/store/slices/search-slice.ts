import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/store.ts'

interface SearchState {
  value: string
}

const initialState: SearchState = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSearchValue } = searchSlice.actions

export const selectSearch = (state: RootState) => state.search.value

export default searchSlice.reducer
