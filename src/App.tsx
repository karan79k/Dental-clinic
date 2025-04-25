import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Referals from './pages/Referals'
import Contact from './pages/Contact'
import OurDoctors from './pages/OurDoctors'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Book from './components/Book'
import GetInTouch from './components/GetInTouch'
//import Loader from './components/Loader'
//import { useState, useEffect } from 'react'

function App() {  
  {/**
     const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, []);
  return (<>
  {isLoading ? (
        <Loader />
      ) : (
    <Router>

      <Header />
      <ScrollToTop />
      <Routes>

        <Route >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/referals" element={<Referals />} />
          <Route path="/our-doctors" element={<OurDoctors />} />
          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>
      <Book />
      <GetInTouch />
      <Footer />
    </Router>
  )}
    </>
  )
}
    */}
    return (<>
     
        <Router>
    
          <Header />
          <ScrollToTop />
          <Routes>
    
            <Route >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/referals" element={<Referals />} />
              <Route path="/our-doctors" element={<OurDoctors />} />
              <Route path="/contact" element={<Contact />} />
    
            </Route>
    
          </Routes>
          <Book />
          <GetInTouch />
          <Footer />
        </Router>
      
        </>
      )
    }

export default App