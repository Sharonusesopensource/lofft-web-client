import Banner from "./Banner"
import Taglines from "./Taglines"
import People from "./People"

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Banner />
      <Taglines />
      <div className="about-us">
        <People />
      </div>
    </div>
  )
}

export default LandingPage
