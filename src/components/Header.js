import logo from "./../logo.svg";
import CountDownToLaunch from "./countdown";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="My WG Logo" className="logo" />
      <div className="nav">
        <h3 className="nav-link">About us</h3>
        <h3 className="nav-link">For Investors</h3>
        <CountDownToLaunch/>
     </div>
    </header>
  );
};

export default Header;
