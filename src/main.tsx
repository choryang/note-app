import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/pages'
import { CssBaseline } from '@mui/material'
import GlobalModal from './components/GlobalModal'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <GlobalModal />
    <RouterProvider router={router} />
  </StrictMode>,
)
