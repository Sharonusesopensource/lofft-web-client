import React from "react";
import Banner from "./Banner/Banner";
import Taglines from "./Taglines/Taglines";
import People from "./People";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const LandingPage = ({ setModal }) => {
  return (
    <div className="landingpage">
      <Banner />
      <Taglines setModal={setModal} />
      <People setModal={setModal} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
