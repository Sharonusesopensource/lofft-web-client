import Banner from "./Banner"
import Taglines from "./Taglines"
import People from "./People"
import PeoplePopup from "./PeoplePopup"


const LandingPage = () => {
  return (
    <div className="landingpage">
      <Banner/>
      <Taglines/>
      <People/>
      <PeoplePopup name="Ivo"/>

    </div>
  )
}

export default LandingPage
