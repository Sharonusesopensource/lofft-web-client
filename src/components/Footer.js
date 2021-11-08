import ContactForm from "./ContactForm"

const Footer = () => {
  return (
    <div className="footer text-center" style={{paddingBottom: "25rem"}}>
      <h3 className="section-tagline">We listen to you.</h3>
      <p className="section-description">Don't be a stranger drop us a line.</p>
      <ContactForm/>
    </div>
  )
}

export default Footer
