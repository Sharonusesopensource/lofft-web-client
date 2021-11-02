import people from "./../people.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="hero">
        <div>
          <h1>Hi, we're lofft, modern brand stewards for the digital generation.</h1>
          <h1>EMAIL FORM</h1>
        </div>
        <img src={people} alt="Illustration of people" className="people" />
      </div>
    </div>
  )
}

export default Banner
