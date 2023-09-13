import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer} from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/skills";
import { Testimonials } from "./components/Testimonials";


import './App.css'

function App() {
  return (
    <>
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
    </>


  )
}

export default App
