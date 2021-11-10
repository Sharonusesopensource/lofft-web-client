import Button from "./Button"
import PeoplePopup from "./PeoplePopup"

import { useState } from "react"

import { peopleJson, samplePerson } from "../people"

const randomPeople = peopleJson.people
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

const Person = ({ person }) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

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
        onClick={toggleModal}
        color="mint"
        style={{ width: "fit-content", margin: "0 auto" }}
      >
        {person.name + " who?"}
      </Button>
      {showModal ? (
        <div className="person-modal">
          <PeoplePopup person={samplePerson} toggleModal={toggleModal} />
        </div>
      ) : null}
    </div>
  )
}

const People = () => {
  return (
    <div className="people-wrapper">
      <h3 className="people-tagline">We are you.</h3>
      <p className="people-description">
        We've all been the new kid in town before.
      </p>
      <p className="people-description">
        Which also means we know exactly how to make your life easier.
      </p>
      <div className="people-container">
        {randomPeople.map((person) => (
          <Person key={"person" + person.name} person={person} />
        ))}
      </div>
    </div>
  )
}

export default People
