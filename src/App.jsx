import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Shop from './components/Shop'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800 bg-[#F9FAFB] antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Shop />
      <About />
      <Footer />
    </div>
  )
}

export default App
