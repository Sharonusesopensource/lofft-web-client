import { useState, useEffect } from "react";
import React from 'react';
import Button from "./Button";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const EmailForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState("");
  const handleChange = ({target}) => {
    setEmail(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onValidated({EMAIL: email});
  }

  useEffect(() => {
    if(status === "success") setEmail("");
    }, [status])

  return (
    <div className="emailform-container">

        {status === "success" && <p className="emailform-message">Thanks for signing up!</p>}
        {status === "sending" && <p className="emailform-message">processing...</p>}
        {status === "error" && <p className="emailform-message" dangerouslySetInnerHTML={{ __html: message }} style={{color:"red"}}/>}
        {status === null && <p className="emailform-message">Be the first to get updates from us</p>}

      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleChange} placeholder="Email"/>
        <button type="submit" style={{display:"none"}}/>
        <Button color="lavender" onClick={handleSubmit}>Sign up</Button>
      </form>
    </div>
  )
}

const MailchimpForm = props => {
    const url = `https://app.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return (
        <div className="mailchimp-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <EmailForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default MailchimpForm;
