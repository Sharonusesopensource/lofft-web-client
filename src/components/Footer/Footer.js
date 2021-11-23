import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-sections">
        <div className="footer-section">
          <p>Contact us</p>
          <a
            href="mailto:hello@lofft.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@lofft.app
          </a>
        </div>
        <div className="footer-section">
          <p>Follow us</p>
          <a
            href="https://www.linkedin.com/company/lofftapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p style={{ fontSize: "1rem", textAlign: "center", marginTop: "3rem" }}>
        Made with{" "}
        <span role="img" aria-label="black heart">
          🖤
        </span>{" "}
        in Berlin
      </p>
    </footer>
  );
};

export default Footer;
