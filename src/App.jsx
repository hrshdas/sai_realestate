import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import FeaturedProperties from './components/FeaturedProperties'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <FeaturedProperties />
        <Testimonials />
        <Gallery />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
