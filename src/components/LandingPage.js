import Banner from "./Banner"
import Taglines from "./Taglines"
import People from "./People"

const LandingPage = ({setModal}) => {
  return (
    <div className="landingpage">
      <Banner/>
      <Taglines setModal={setModal}/>
      <People/>
    </div>
  )
}

export default LandingPage
