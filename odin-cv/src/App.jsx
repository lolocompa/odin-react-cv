import "./App.css";
import { Section } from "./components/Section";
import { useState } from "react";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Cv } from "./components/view_cv";

function App() {
  const [contact, setcontact] = useState({
    name: "Harry Potter",
    email: "harrypotter@gmail.com",
    phone: "555-555-5555",
  });

  const [experience, setexperience] = useState({
    company: "ministry of magic",
    position: "auror",
    description: "i hunted deatheaters",
    from: "2018-03",
    to: "2023-07",
  });

  const [education, seteducation] = useState({
    school: "hogwarts",
    degree: "bachelor of defense against the dark arts",
    from: "2000-05",
    to: "2012-06",
  });

  return (
    <div className="page">
      <div className="all_forms">
        <Section title="Contact">
          <Contact contact={contact} submit_form={setcontact}></Contact>
        </Section>
        <Section title="Education">
          <Education
            education={education}
            submit_form={seteducation}
          ></Education>
        </Section>
        <Section title="Experience">
          <Experience
            experience={experience}
            submit_form={setexperience}
          ></Experience>
        </Section>
      </div>
      <div className="cv_container">
        <Cv
          contact={contact}
          education={education}
          experience={experience}
        ></Cv>
      </div>
    </div>
  );
}

export default App;


