import AboutMe from "./sections/AboutMe"
import ContactSection from "./sections/ContactSection"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

const  App = () => {
  
return (
    <>
      <div> 
          
          <Header/>
          <Hero/>
          
          <Skills/>
          <Experience/>
          <AboutMe/>
          <Projects/>
          <ContactSection/>
          <Footer/>
      </div>
    </>
  )
}

export default App
