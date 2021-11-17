import Banner from "./Banner"
import Taglines from "./Taglines"
import People from "./People"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Banner/>
      <Taglines/>
      <People/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default LandingPage
