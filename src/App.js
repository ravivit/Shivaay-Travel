import React,{useEffect} from 'react'
import Services from './components/Services'
import NevBar from './components/NevBar'
import Recommend from './components/Recommend'
import Testimonial from './components/Testimonial'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Question from './components/Questions'
import scrollreveal from 'scrollreveal'

export default function App() {
  useEffect(()=>{
    const sr=scrollreveal({
      origin:"top",
      distance:"80px",
      duration:2000,
      reset:true,
    });
    sr.reveal(
      `nav,
      #hero,
      #services,
      #recommend,
      `,
      {
        opacity:0,
        interval:200,
      }
      )
  },[])
  return (
   <>
   <NevBar/>
    <Hero/>
    <Services/>
    
    <Recommend/>
    <Testimonial/>
    <Question/>
    <ScrollToTop/>
    <Footer/>
   
   </>
  )
}

