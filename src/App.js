import "./styling/App.scss";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import InvestorPage from "./components/InvestorPage";
import Modal from "./components/Modal";

import { useState } from "react";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const togglePage = () => {
    setShowLanding((prevState) => !prevState)
  }

  const [showModal, setShowModal] = useState(true)
  const [modalData, setModalData] = useState({type: null, key: null})
  const toggleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  return (
    <div className="App">
      <Header toggle={togglePage} isLanding={showLanding}/>
     {showLanding && <LandingPage />}
     {!showLanding && <InvestorPage />}
     {showModal && <Modal data={modalData}/>}
    </div>
  );
}

export default App;
