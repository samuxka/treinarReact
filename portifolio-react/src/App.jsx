import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import About from './components/about/about'
import Services from './components/services/services'
import Portifolio from './components/portifolio/portifolio'
import Pricing from './components/pricing/pricing'
import Testimonials from './components/testmonials/testmonials'
import Contact from './components/contact/contact'
import './App.css'

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Portifolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App
