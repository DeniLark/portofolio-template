import { AboutMe } from "./sections/AboutMe"
import { Contacts } from "./sections/Contacts"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { Portofolio } from "./sections/Portofolio"
import { Skills } from "./sections/Skills"
import "./styles/base.css"
import "./styles/index.scss"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Portofolio />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
