import CountDownToLaunch from "../countdown";
import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <img
        src={process.env.PUBLIC_URL + "/illustrations/logo.svg"}
        alt="Lofft Logo"
        className="logo"
      />
      <CountDownToLaunch />
    </header>
  );
};

export default Header;
