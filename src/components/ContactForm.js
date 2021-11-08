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
    <form className="contactform" onSubmit={handleSubmit}>
      <div>
        <input className="input-minimal" type="text" value={name} onChange={handleChangeName} placeholder="name"/>
        <input className="input-minimal" type="email" value={email} onChange={handleChangeEmail} placeholder="email"/>
      </div>
      <input className="input-minimal" type="text" value={message} onChange={handleChangeMessage} placeholder="message"/>
      <button type="submit" style={{display: "none"}}/>
      <Button color="lavender" style={{width: "fit-content", margin: "0 auto"}} >Send</Button>
    </form>
  )
}

export default ContactForm
