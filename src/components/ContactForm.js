import { useState } from "react"

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
      <input type="text" value={name} onChange={handleChangeName}/>
      <input type="email" value={email} onChange={handleChangeEmail}/>
      <input type="text" value={message} onChange={handleChangeMessage}/>
      <button type="submit" style={{display: "none"}}/>
    </form>
  )
}

export default ContactForm
