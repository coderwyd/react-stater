import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import type { AppDispatch, RootState } from '.'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export function useDispatch() {
  return useReduxDispatch<AppDispatch>()
}
