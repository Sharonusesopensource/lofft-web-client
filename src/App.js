import React, { useEffect } from "react";
import "./styling/App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import CookieBanner from "./components/Banner/CookieBanner"
import Modal from "./components/Modal/Modal";
import TagManager from "react-gtm-module";
import { useState } from "react";
import Cookies from 'universal-cookie';

import './i18n';

const cookies = new Cookies();

const tagManagerArgs = {
  gtmId: "GTM-M628J8Q",
};


function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ type: null, key: null });
  const [showCBanner, setShowCBanner] = useState(() => {
    return !cookies.get('cookie-consent')
  })

  useEffect(() => {
    if(cookies.get('cookie-consent') === "true") {
      TagManager.initialize(tagManagerArgs);
    }
  }, [showCBanner])


  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const setModal = (modalData) => {
    setModalData(modalData);
    toggleModal();
  };

  const handleCookieBanner = (arg) => {
    setShowCBanner(false)
    cookies.set('cookie-consent', arg)
  }

  return (
    <div className="App">
      <Header />
      <LandingPage setModal={setModal} />
      {showModal && <Modal data={modalData} toggleModal={toggleModal} />}
      {showCBanner && <CookieBanner cookies={cookies} handleBanner={handleCookieBanner}/>}
    </div>
  );
}

export default App;
