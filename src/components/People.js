import React from 'react';
import Button from "./Button"
import { peopleJson } from "../people"

const randomPeople = peopleJson.people
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

const Person = ({ person, setModal }) => {

  return (
    <div className="person">
      <img
        className="person-image"
        src={process.env.PUBLIC_URL + "/people/" + person.image}
        alt={person.name}
      />
      <p className="person-name">{person.name}</p>
      <p className="person-role">{person.role}</p>
      <Button
        onClick={() => setModal({type: "person", key: person})}
        color="mint"
        style={{ width: "fit-content", margin: "0 auto" }}
      >
        {person.name + " who?"}
      </Button>
    </div>
  )
}

const People = ({setModal}) => {
  return (
    <div className="people-wrapper">
      <h3 className="section-tagline">We are you</h3>
      <p className="section-description">We've all been the new kid in town before.</p>
      <p className="section-description">Which also means we know exactly how to make your life easier.</p>
      <div className="people-container">
        {randomPeople.map((person) => (
          <Person key={"person" + person.name} person={person} setModal={setModal}/>
        ))}
      </div>
    </div>
  )
}

export default People
