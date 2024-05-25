import { Route, Routes } from 'react-router-dom'
import Layout from '@/layout/layout.tsx'
import Home from '@/pages/home.tsx'
import NotFoundPage from '@/pages/not-found-page.tsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
