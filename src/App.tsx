import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Referals from './pages/Referals'
import Treatments from './pages/Treatments'
import Contact from './pages/Contact'
import OurDoctors from './pages/OurDoctors'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/referals" element={<Referals />} />
          <Route path="/our-doctors" element={<OurDoctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/treaments" element={<Treatments />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App