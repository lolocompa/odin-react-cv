import React from "react";
import { useState } from "react";

export const Contact = ({ contact, submit_form }) => {
  const [name, setname] = useState(contact.name);
  const [email, setemail] = useState(contact.email);
  const [phone, setphone] = useState(contact.phone);

  return (
    <form action="">
      <div className="form_section">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </div>
      <div className="form_section">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div className="form_section">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          submit_form({ name: name, email: email, phone: phone });
        }}
        className="submit_btn"
      >Submit</button>
    </form>
  );
};
