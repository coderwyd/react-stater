import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { baseApi } from '@/api/base'
import MovieSlice from './slices/movie'
import UserSlice from './slices/userSlice'
import type { Action, ThunkAction } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  // custom slice
  user: UserSlice,
  movie: MovieSlice,
})

// redux persist
const persistConfig = {
  key: 'redux-state',
  storage,
}
const persistReducerConfig = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistReducerConfig,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: import.meta.env.DEV,
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use custom thunk function
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export * from './hooks'

export default store
