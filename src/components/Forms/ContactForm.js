import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [checkBox, setCheckbox] = useState(false);

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleChangeName = ({ target }) => {
    setName(target.value);
  };
  const handleChangeMessage = ({ target }) => {
    setMessage(target.value);
  };

  const handleCheckbox = ({ target }) => {
    setCheckbox(target.checked);
  };

  async function submitForm(e) {
    e.preventDefault();

    const webhookUrl = process.env.REACT_APP_CONTACTFORM_WEBHOOK;

    const data = {
      text: `Name: ${name} \n${email} \n${message}${
        checkBox ? "\nPlease add me to mailinglist" : ""
      }`,
    };

    let res = await axios.post(webhookUrl, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post["Content-Type"];
          return data;
        },
      ],
    });

    if (res.status === 200) {
      alert(t('contactForm.success'));

      setName("");
      setEmail("");
      setMessage("");
      setCheckbox(false);
    } else {
      alert(t('contactForm.failiure'));
    }
  }

  return (
    <div className="contactform-wrapper text-center">
      <h3 className="section-tagline">{t('contactForm.tagline')}</h3>
      <p className="section-description">{t('contactForm.description')}</p>

      <form className="contactform" onSubmit={submitForm}>
        <div className="contact-row">
          <input
            className="input-minimal"
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder={t('contactForm.namePlaceholder')}
            style={{ marginRight: "2rem" }}
          />
          <input
            className="input-minimal"
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder={t('contactForm.emailPlaceholder')}
          />
        </div>
        <input
          className="input-minimal"
          type="text"
          value={message}
          onChange={handleChangeMessage}
          placeholder={t('contactForm.textPlaceholder')}
        />
        <button type="submit" style={{ display: "none" }} />
        <div className="contact-row">
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              checked={checkBox}
            />
            <p style={{ margin: 0 }}>{t('contactForm.checkbox')}</p>
          </div>
          <Button
            color="lavender"
            style={{ width: "fit-content", marginLeft: "auto" }}
            onClick={submitForm}
          >
            {t('contactForm.submit')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
