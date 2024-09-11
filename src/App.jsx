import React from "react"
import { Layout } from "./layout/Layout"
import Theme from "./styles/themes"
import Hero from "./components/Hero/Hero"
import { Section } from "./styles/GlobalComponents"
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation"
import Projects from "./components/Projects/Projects"
import Technologies from "./components/Technologies/Technologies"
import Education from "./components/Education/Education"

function App() {



  return (
    <>
      <Theme>
        <Layout>
          <Section grid>
            <Hero />
          </Section>
            <Projects />
            <Technologies />
            <Education />
        </Layout>
      </Theme>
    </>
  )
}

export default App
