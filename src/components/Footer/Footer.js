import React from "react";
import "./footer.scss";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="footer-sections">
        <div className="footer-section">
          <p>{t('footer.contact')}</p>
          <a
            className="footer-link"
            href="mailto:hello@lofft.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@lofft.app
          </a>
        </div>
        <div className="footer-section">
          <p>{t('footer.follow')}</p>
          <a
            className="footer-link"
            href="https://www.linkedin.com/company/lofftapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-section">
          <p>{t('footer.languageToggle')}</p>
          <p className={`footer-link ${i18n.language === "en" ? "active" : ""}`} onClick={() => i18n.changeLanguage("en")}>English</p>
          <p className={`footer-link ${i18n.language === "de" ? "active" : ""}`} onClick={() => i18n.changeLanguage("de")}>Deutsch</p>
        </div>
      </div>
      <p style={{ fontSize: "1rem", textAlign: "center", marginTop: "3rem" }}>
        {t('footer.made')}
        {" "}
        <span role="img" aria-label="black heart">
          🖤
        </span>{" "}
        {t('footer.berlin')}
      </p>
    </footer>
  );
};

export default Footer;
