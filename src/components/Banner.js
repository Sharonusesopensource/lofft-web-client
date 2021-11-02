import people from "./../people.svg"
import textlogo from "./../textlogo.svg"
import EmailForm from "./EmailForm"

const Banner = () => {
  return (
    <div className="banner">
      <div className="hero">
        <div>
          <h1>Hi, we're<img class="intext-logo" alt="lofft" src={textlogo}></img>, modern brand stewards for the digital generation.</h1>
          <EmailForm/>
        </div>
        <div className="img-container">
          <img src={people} alt="Illustration of people" className="people" />
        </div>
      </div>
    </div>
  )
}

export default Banner
