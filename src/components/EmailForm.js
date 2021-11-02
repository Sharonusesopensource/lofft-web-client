import { useState } from "react";

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
      <div className="button">Sign up</div>
    </form>
  )
}

export default EmailForm;
