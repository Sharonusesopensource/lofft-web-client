import React, { useEffect } from "react";
import "./styling/App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import CookieBanner from "./components/Banner/CookieBanner"
import Modal from "./components/Modal/Modal";
import TagManager from "react-gtm-module";
import { useState } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const tagManagerArgs = {
  gtmId: "GTM-M628J8Q",
};


function App() {

  useEffect(() => {
    console.log("GTM CHECK")
    if(cookies.get('cookie-consent') === "true") {
      console.log("accepted")
      TagManager.initialize(tagManagerArgs);
    } else {
      console.log("denied/unset")
    }
  }, [])
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ type: null, key: null });
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const setModal = (modalData) => {
    setModalData(modalData);
    toggleModal();
  };

  return (
    <div className="App">
      <Header />
      <LandingPage setModal={setModal} />
      {showModal && <Modal data={modalData} toggleModal={toggleModal} />}
      <CookieBanner />
    </div>
  );
}

export default App;
