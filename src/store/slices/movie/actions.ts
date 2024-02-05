import { createAsyncThunk } from '@reduxjs/toolkit'

// import type { AppThunk } from '@/store'
import { getMovieListApi } from '@/api/movie'

// async Action
export const getMovieData = createAsyncThunk('movie/getMovie', async () => {
  const data = await getMovieListApi().then(res => res)
  return data
})

// custom thunk function
// export function fetchActivities(): AppThunk {
//   return async (dispatch) => {
//     const res = await fetch('/activities')
//     const body = await res.json()
//     dispatch(fetchActivitiesSuccess(body))
//   }
// }
