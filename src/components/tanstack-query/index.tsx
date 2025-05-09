import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // 重试次数
    },
    mutations: {
      retry: 0, // 重试次数
    },
  },
})

export interface TanstackQueryProps {
  children: ReactNode
}

export function TanstackQuery({ children }: TanstackQueryProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  )
}
