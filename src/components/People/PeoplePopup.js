import React from "react";
import Slider from "../Slider/Slider";
import "./peoplePopup.scss";
import { useTranslation } from 'react-i18next';

const PeoplePopup = ({ person }) => {
  const { t } = useTranslation();

  return (
    <div className="member-frame">
      <div className="member-header">
        <h1>{person.name}</h1>
        <p className="member-description">{t(`people.${person.name}.description`)}</p>
      </div>
      <div className="member-frame-content">
        <div className="member-interests">
          <p className="interest-title">{t('peoplePopup.question', {name: person.name})}</p>
          <Slider question="animal" value={person.animal} />
          <Slider question="vacation" value={person.vacation} />
          <Slider question="drink" value={person.drink} />
          <Slider question="media" value={person.media} />
        </div>
        <div className="member-right-panel">
          <img
            src={process.env.PUBLIC_URL + `/people/${person.image}`}
            alt={person.name}
            className="modal-avatar"
          />
          <p>{t(`people.${person.name}.role`)}</p>
          <div className="member-icons">
            {person.links.map((link) => (
              <a href={`${link.url}`} target="_blank" rel="noopener noreferrer" key={`link-${link.alt}`}>
                <img
                  src={process.env.PUBLIC_URL + `/icons/${link.icon}`}
                  alt=""
                  className="social-icon button"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePopup;
