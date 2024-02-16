import React from "react";
import { useState } from "react";

export const Section = ( { title , children } ) => {
  const [visible, setvisible] = useState(false);

  function section_click() {
    if (visible === false) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  }

  return (
    <div className="form_field">
      <div className="header" onClick={section_click}>
        <h1>{title}</h1>
        <span>{visible ? <i className='bx bx-chevron-up'></i>: <i className='bx bx-chevron-down' ></i>}</span>
      </div>
      {visible && children}
    </div>

  );
};
