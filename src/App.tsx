import { Toaster } from 'react-hot-toast'
import './App.css'
import AppRoutes from './routes/routes'

function App() {

  return (
    <>
      <Toaster position="top-center" />
      <AppRoutes />
    </>
  )
}

export default App
