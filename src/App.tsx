import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'
import Home from './pages/home'
import Terms from './pages/terms'
import Policy from './pages/policy'
import Showcases from './pages/showcases'

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/showcases" element={<Showcases />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}