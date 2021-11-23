import React from 'react';
const Footer = () => {
  return (
    <footer>
      <div className="footer-sections">
        <div className="footer-section">
          <p>Contact us</p>
          <a href="mailto:hello@lofft.app" target="_blank" rel="noreferrer">hello@lofft.app</a>
        </div>
        <div className="footer-section">
          <p>Follow us</p>
          <a  href="https://www.linkedin.com/company/lofftapp" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <p style={{fontSize: "1rem", textAlign: "center", marginTop: "3rem"}}>Made with 🖤 in Berlin</p>
    </footer>
  )
}

export default Footer
