import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
