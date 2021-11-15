import Banner from "./Banner"
import Taglines from "./Taglines"
import People from "./People"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Banner/>
      <Taglines/>
      <People/>
      <Footer/>
    </div>
  )
}

export default LandingPage
