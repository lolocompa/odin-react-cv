import React, { useState } from "react";

export const Education = ({ education, submit_form }) => {
  const [check, setcheck] = useState(
    education.to === "present" ? true : false
  );

  const [school, setschool] = useState(education.school);
  const [degree, setsdegree] = useState(education.degree);
  const [from, setfrom] = useState(education.from);
  const [to, setto] = useState(education.to);

  return (
    <form action="">
      <div className="form_section">
        <label htmlFor="school">School Name:</label>
        <input
          type="text"
          name="school"
          value={school}
          onChange={(e) => {
            setschool(e.target.value);
          }}
        />
      </div>
      <div className="form_section">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          name="degree"
          value={degree}
          onChange={(e) => {
            setsdegree(e.target.value);
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
        <label htmlFor="checkbox">i am currently attending to school</label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          submit_form({
            school: school,
            degree: degree,
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