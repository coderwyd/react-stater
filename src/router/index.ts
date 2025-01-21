import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([], {
  basename: import.meta.env.BASE_URL,
})

export async function setupRouter() {
  // router beforeEach
  // router.getBlocker('beforeEach', routerBeforeEach(router))
  // // router afterEach
  // router.subscribe(routerAfterEach)
}

export default router
