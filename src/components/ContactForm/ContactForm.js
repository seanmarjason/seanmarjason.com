import React, { useState } from "react";

// const FORM_ENDPOINT = "https://public.herotofu.com/v1/983f05f0-b5e8-11ec-b4fe-2b9cbf782176"
const FORM_ENDPOINT = "http://localhost:3010/" // For local testing

const ContactForm = () => {

  const defaultForm = {
    name: '',
    email: '',
    message: ''
  }

  const [status, setStatus] = useState();
  const [form, setForm] = useState(defaultForm);

  const handleChange = (key, value) => {
    const newValue = {
      ...form,
      [key]: value
    }
    setForm(newValue);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = Object.values(e.target.elements);

    const data = inputs.reduce((acc, value) => {
      value.name && (acc[value.name] = value.value)
      return acc
    }, {})

    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }

    setForm(defaultForm);

    try {
      const response = await fetch(FORM_ENDPOINT, request);
      // It's likely a spam/bot request, so bypass it to validate via captcha
      if (response.status === 422) {
        e.target.submit();
        throw new Error("Please finish the captcha challenge");
      }
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      setStatus("I'll be in touch soon.")
      return response.json();
    }
    catch (err) {
      console.log(err);
      setStatus(err.toString())
    }

  };

  return (
    <div>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div>
          <label htmlFor="name">Your Name</label>
          <input 
            name="Name" 
            id="name" 
            type="text" 
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            name="Email" 
            id="email" 
            type="email" 
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required  
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            required
          />
        </div>
        <div>
          <input type="submit" value="Send Message" />
        </div>
      </form>
      { 
      status && 
        <div>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">{status}</div>
        </div>
      }
  </div>
  )
}

export default ContactForm;
