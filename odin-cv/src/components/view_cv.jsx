import React from "react";

export const Cv = (props) => {
  return (
    <div className="whole_cv">
      <div className="contact">
        <h1>{props.contact.name}</h1>
        <div className="e_and_p">
          <div className="email">
            <span>
              <i className="bx bx-envelope"></i>
            </span>
            <h3>{props.contact.email}</h3>
          </div>
          <div className="phone">
            <span>
              <i className="bx bx-phone"></i>
            </span>
            <h3>{props.contact.phone}</h3>
          </div>
        </div>
      </div>
      <h1>Education</h1>
      <hr />
      <div className="education">
        <div className="dates">
          <h5>
            {props.education.from} to {props.education.to}
          </h5>
        </div>
        <div className="education_info">
          <h2>{props.education.school}</h2>
          <h5>{props.education.degree}</h5>
        </div>
      </div>
      <h1>Experience</h1>
      <hr />
      <div className="experience">
        <div className="dates">
          <h5>
            {props.experience.from} to {props.experience.to}
          </h5>
        </div>
        <div className="experience_info">
          <h2>{props.experience.company}</h2>
          <h5>{props.experience.position}</h5>
          <div className="description_container">
            <p>{props.experience.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
