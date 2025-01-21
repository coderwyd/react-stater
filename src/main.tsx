import { createRoot } from 'react-dom/client'
import { TanstackQuery } from '@/components'
import App from './App'
import '@ant-design/v5-patch-for-react-19'
import 'virtual:uno.css'

function setupApp() {
  // await setupRouter();

  const rootElement = document.querySelector('#root')
  if (!rootElement) return
  const root = createRoot(rootElement)

  root.render(
    <TanstackQuery>
      <App />
    </TanstackQuery>,
  )
}

setupApp()
