import "./styling/App.scss";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App wrapper">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
