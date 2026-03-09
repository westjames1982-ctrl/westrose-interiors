import Header from '../components/Header'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </main>
  )
}
