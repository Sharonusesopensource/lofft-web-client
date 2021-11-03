import "./styling/App.scss";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import InvestorPage from "./components/InvestorPage";

import { useState } from "react";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const togglePage = () => {
    setShowLanding((prevState) => !prevState)
  }

  return (
    <div className="App">
      <Header toggle={togglePage} isLanding={showLanding}/>
     {showLanding && <LandingPage />}
     {!showLanding && <InvestorPage />}
    </div>
  );
}

export default App;
