import React from 'react';
import Banner from "./Banner"
import Taglines from "./Taglines"
import People from "./People"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

const LandingPage = ({setModal}) => {
  return (
    <div className="landingpage">
      <Banner/>
      <Taglines setModal={setModal}/>
      <People setModal={setModal}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default LandingPage
