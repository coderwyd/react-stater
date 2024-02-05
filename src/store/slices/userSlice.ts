import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UsersState {
  count: number
}

const initialState: UsersState = {
  count: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state: UsersState, action: PayloadAction<number | undefined>) => {
      const { payload = 1 } = action
      state.count += payload ?? 1
    },
    decrement: (state: UsersState) => {
      state.count += 1
    },
  },
  // extraReducers(builder) {},
})

export const { increment, decrement } = userSlice.actions

// export const incrementAsync = (count: number) => dispatch => {
//   setTimeout(() => {
//     dispatch(addCount(count))
//   }, 1000)
// }

export default userSlice.reducer
