import React from "react";
import Banner from "../components/Banner/Banner";
import Taglines from "../components/Taglines/Taglines";
import People from "../components/People/People";
import ContactForm from "../components/Forms/ContactForm";
import Footer from "../components/Footer/Footer";

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
