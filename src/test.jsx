import { useState } from "react";
import "./test.css";

function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Jacob",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  return (
    <div className="card">
      <div className="name-display">
        {person.firstName} {person.lastName}
      </div>
      <div className="age-display">{person.age}</div>
      <button className="age-btn" onClick={handleIncreaseAge}>
        + Age
      </button>
      <div className="inputs">
        <input
          placeholder="First name"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Last name"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </div>
    </div>
  );
}

export default Person;
