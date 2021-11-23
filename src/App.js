import React from "react";
import "./styling/App.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import Modal from "./components/Modal/Modal";

import { useState } from "react";

function App() {
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
    </div>
  );
}

export default App;
