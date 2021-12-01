import React from "react";
import Button from "../Button/Button";
import peopleJson from "./people.json";
import "./people.scss";
import { scrollDissable } from "../../scrolltoggle";
import { useTranslation } from 'react-i18next';

const randomPeople = peopleJson.people
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

const Person = ({ person, setModal }) => {
  const { t } = useTranslation();

  return (
    <div className="person">
      <img
        className="person-image"
        src={process.env.PUBLIC_URL + "/people/" + person.image}
        alt={person.name}
      />
      <p className="person-name">{person.name}</p>
      <p className="person-role">{t(`people.${person.name}.role`)}</p>
      <Button
        onClick={() => {
          scrollDissable();
          setModal({ type: "person", key: person });
        }}
        color="mint"
        style={{ width: "fit-content", margin: "0 auto" }}
      >
        {person.name + " " + t('people.question')}
      </Button>
    </div>
  );
};

const People = ({ setModal }) => {
  const { t } = useTranslation();

  return (
    <div className="people-wrapper">
      <h3 className="section-tagline">{t('people.tagline')}</h3>
      <p className="section-description">
        {t('people.description1')}
      </p>
      <p className="section-description">
        {t('people.description2')}
      </p>
      <div className="people-container">
        {randomPeople.map((person) => (
          <Person
            key={"person" + person.name}
            person={person}
            setModal={setModal}
          />
        ))}
      </div>
    </div>
  );
};

export default People;
