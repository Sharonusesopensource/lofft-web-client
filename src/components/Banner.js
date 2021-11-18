import MailchimpForm from "./EmailForm"

const Banner = () => {
  return (
    <div className="banner">
      <div className="hero">
        <div>
          <h1>We're<img className="intext-logo" alt="lofft" src={process.env.PUBLIC_URL + '/illustrations/textLogo.svg'}></img>, the brand new way to manage shared flats and accomodation <br/>- together.</h1>
          <MailchimpForm/>
        </div>
        <div className="img-container">
          <img src={process.env.PUBLIC_URL + '/illustrations/people.svg'} alt="Illustration of people" className="people" />
        </div>
      </div>
    </div>
  )
}

export default Banner
