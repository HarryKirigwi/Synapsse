import * as React from 'react'
import "./App.css";
import Landing from "./components/landing";
import Hero from "./components/hero";
import TestimonialSection from "./components/testimonials";
import About from "./components/about";
import WhyChooseSynapsse from "./components/WhyChooseSynapsse";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

function Home() {
  return (
    <div className="bg-generalBg">
        <div>
          <Landing />
          <Hero/>
          <About/>
          <TestimonialSection/>
          <WhyChooseSynapsse/>
          <ContactPage/>
          <Footer/>
        </div>
      </div>
  )
}

export default Home