import { useState } from "react";
import Button from "./Button";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const handleChange = ({target}) => {
    setEmail(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.alert(`Thanks for signing up ${email} !`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleChange} placeholder="email@domain.com"/>
      <button type="submit" style={{display:"none"}}/>
      <Button color="lavender" style={{fontSize: "1.5rem"}} onClick={handleSubmit}>Sign up</Button>
    </form>
  )
}

export default EmailForm;
