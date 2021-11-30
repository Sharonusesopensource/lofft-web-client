import React from "react";
import MailchimpForm from "../Forms/EmailForm";
import "./banner.scss";
import textLogo from "../../assets/illustrations/textlogo.svg";
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner">
      <div className="hero">
        <div>
          <h1>
            <img className="intext-logo" alt="lofft" src={textLogo}></img>
            {t('banner.message')}
          </h1>
          <MailchimpForm />
        </div>
        <div className="img-container">
          <img
            src={process.env.PUBLIC_URL + "/illustrations/people.svg"}
            alt="Illustration of people"
            className="people"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
