import { createSlice } from '@reduxjs/toolkit'
import { getMovieData } from './actions'
import type { RootObject } from './types'

interface MovieState {
  list: RootObject[]
  total: number
}

const initialState: MovieState = {
  list: [],
  total: 0,
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadDataEnd: (state, { payload }) => {
      state.list = payload
      state.total = payload.length
    },
  },
  extraReducers(builder) {
    builder
      // .addCase(getMovieData.pending, () => {
      //   console.log('🚀 ~ pedding！')
      // })
      .addCase(getMovieData.fulfilled, (state, { payload }) => {
        console.log('🚀 ~ fulfilled', payload)
        state.list = payload.data.list
        state.total = payload.data.list.length
      })
    // .addCase(getMovieData.rejected, (_, err) => {
    //   console.log('🚀 ~ rejected', err)
    // })
  },
})

export const { loadDataEnd } = movieSlice.actions

export default movieSlice.reducer

export { getMovieData }
