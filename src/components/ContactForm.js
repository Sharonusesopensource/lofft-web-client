import { useState } from "react"
import Button from "./Button"

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleChangeEmail = ({target}) => {
    setEmail(target.value)
  }
  const handleChangeName = ({target}) => {
    setName(target.value)
  }
  const handleChangeMessage = ({target}) => {
    setMessage(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="contactform-wrapper text-center">
      <h3 className="section-tagline">We listen to you.</h3>
      <p className="section-description">Don't be a stranger drop us a line.</p>

      <form className="contactform" onSubmit={handleSubmit}>
        <div style={{display: "flex"}}>
          <input className="input-minimal" type="text" value={name} onChange={handleChangeName} placeholder="name" style={{marginRight: "2rem"}}/>
          <input className="input-minimal" type="email" value={email} onChange={handleChangeEmail} placeholder="email"/>
        </div>
        <input className="input-minimal" type="text" value={message} onChange={handleChangeMessage} placeholder="message"/>
        <button type="submit" style={{display: "none"}}/>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <input type="checkbox"/>
            <p style={{margin: 0}}>Sign me up for newsletter</p>
          </div>
          <Button color="lavender" style={{width: "fit-content"}} >Send</Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
