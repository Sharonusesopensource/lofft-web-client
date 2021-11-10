import Banner from "./Banner"
import Taglines from "./Taglines"
import PeoplePopup from "./PeoplePopup"
import { useState } from "react"

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false)
  const person = {
    name: "Valentin",
    role: "Assistant magician & Head of Engineering",
    image: "freddie.png",
    description:
      "Valentin studied computer Science at TU Berlin. He's currently teaching creative people programming at LeWagon.",
    animal: 5,
    vacation: 2,
    drink: 3,
    media: 10,
    links: [
      {
        icon: "github.png",
        url: "https://github.com/valentinlw",
        alt: "Github",
      },
      {
        icon: "linkedin.png",
        url: "https://github.com/valentinlw",
        alt: "LinkedIn",
      },
      {
        icon: "email.png",
        url: "mailto:valentin@lofft.app",
        alt: "Email",
      },
    ],
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="landingpage">
      <Banner />
      <Taglines />
      <PeoplePopup person={person} />
    </div>
  )
}

export default LandingPage
