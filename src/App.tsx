import { Toaster } from 'react-hot-toast'
import './App.css'
import AppRoutes from './routes/routes'
import CursorBlurEffect from './component/cursor-effect-component/CursorEffect'

function App() {

  return (
    <>
      <Toaster position="top-center" />
      <AppRoutes />
      <CursorBlurEffect />
    </>
  )
}

export default App
