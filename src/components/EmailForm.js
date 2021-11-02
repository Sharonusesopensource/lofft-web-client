import { useState } from "react";
import Button from "./Button";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const handleChange = ({target}) => {
    setEmail(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={handleChange}/>
      <button type="submit" style={{display:"none"}}/>
      <Button color="lavender">Sign up</Button>
    </form>
  )
}

export default EmailForm;
