import React, { useState } from "react";
import "./index.css";

const ContactForm = () => {
  const [contact, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setContactForm((val) => ({ ...val, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      country: contact.country,
      message: contact.message,
    };
    alert(
      `Hi ${userData.firstName} ${userData.lastName} your email: ${userData.email}, phone number: ${userData.phone}, your country is: ${userData.country} and your message is: ${userData.message}`
    );
  };
  return (
    <>
      <div className="container" style={{ marginTop: "5%" }}>
        <div>
          <h1 className="text-center">Contact Form</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              autoComplete="off"
              value={contact.firstName}
              onChange={handleInputValue}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              autoComplete="off"
              value={contact.lastName}
              onChange={handleInputValue}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              value={contact.email}
              onChange={handleInputValue}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              name="phone"
              required
              autoComplete="off"
              value={contact.phone}
              onChange={handleInputValue}
            />

            <label htmlFor="country">Country</label>
            <br />
            <select
              className="form-control"
              id="country"
              name="country"
              required
              autoComplete="off"
              value={contact.country}
              onChange={handleInputValue}
            >
              <option id="1" value="india">
                India
              </option>
              <option id="2" value="usa">
                USA
              </option>
              <option id="3" value="canada">
                Canada
              </option>
              <option id="4" value="australia">
                Australia
              </option>
            </select>
            <br />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              required
              autoComplete="off"
              value={contact.message}
              onChange={handleInputValue}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
