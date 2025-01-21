import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CountState {
  count: number
  list: string[]
}

interface CountAction {
  increment: (c?: number) => void
  decrement: () => void
}

export const useCountStore = create<CountState & CountAction>()(
  persist(
    (set) => ({
      count: 0,
      list: [],
      increment: (c: number = 1) =>
        set((state) => ({ count: state.count + c })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'movie-store',
    },
  ),
)
