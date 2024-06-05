import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProblemSolvedSection from './components/ProblemSolvedSection'
import HeroSection from './components/HeroSection'
import Target from './components/Target'
import Testimonials from './components/Testimonials'
import MetricsSection from './components/MetricSection'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSolvedSection />
      <MetricsSection />
      <Testimonials />
      <Target />
      <Footer />
    </>
  )
}

export default App
