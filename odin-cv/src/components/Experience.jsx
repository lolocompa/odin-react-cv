import React from "react";
import { useState } from "react";

export const Experience = ({ experience, submit_form }) => {
  const [check, setcheck] = useState(
    experience.to === "present" ? true : false
  );

  const [company, setcompany] = useState(experience.company);
  const [position, setposition] = useState(experience.position);
  const [description, setdescription] = useState(experience.description);
  const [from, setfrom] = useState(experience.from);
  const [to, setto] = useState(experience.to);

  return (
    <form action="">
      <div className="form_section">
        <label htmlFor="company">Company Name:</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => {
            setcompany(e.target.value);
          }}
        />
      </div>
      <div className="form_section">
        <label htmlFor="position">Position Title:</label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => {
            setposition(e.target.value);
          }}
        />
      </div>
      <div className="form_section">
        <label htmlFor="description">Description:</label>
        <input
          type="textarea"
          name="description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
      </div>
      <div className="form_section">
        <label htmlFor="from">From:</label>
        <input
          type="month"
          name="from"
          value={from}
          onChange={(e) => {
            setfrom(e.target.value);
          }}
        />
      </div>
      <div className="form_section">
        <label htmlFor="to">To:</label>
        <input
          type="month"
          name="to"
          value={check ? "" : to}
          disabled={check ? true : null}
          onChange={(e) => {
            setto(e.target.value);
          }}
        />
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          name="checkbox"
          onChange={() => {
            setcheck(!check);
          }}
        />
        <label htmlFor="checkbox">
          i am currently working in this position
        </label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          submit_form({
            company: company,
            position: position,
            description: description,
            from: from,
            to: check ? "present" : to,
          });
        }}
        className="submit_btn"
      >
        Submit
      </button>
    </form>
  );
};
