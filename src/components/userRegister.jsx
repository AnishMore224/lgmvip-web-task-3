import React, { useState } from "react";

const UserRegister = () => {
  const [data, setData] = useState([]);
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);

  const display = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const website = e.target.elements.website.value;
    const image = e.target.elements.image.value;

    setData([...data, { name, email, website, image, gender, skills }]);
    console.log(name, email, website, image, gender, skills);

    const form = e.target;
    form.reset();
    setGender("");
    setSkills([]);
  };

  const handleGenderChange = (e) => {
    const newGender = e.target.value;
    setGender(newGender);
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (e.target.checked) {
      setSkills([...skills, skill]);
    } else {
      setSkills(skills.filter((s) => s !== skill));
    }
  };

  return (
    <>
      <h1>Student Enrollment Form</h1>
      <div id="main">
      <form onSubmit={display}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input type="url" id="website" name="website" />
        </div>
        <div>
          <label htmlFor="image">Image Link</label>
          <input type="url" id="image" name="image" />
        </div>

        <div>
          <label>Gender</label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={handleGenderChange}
            />
            <label htmlFor="male">Male</label> 
            <br />
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={handleGenderChange}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div>
          <label>Skills</label>
          <div>
            <input
              type="checkbox"
              id="HTML"
              name="skill"
              value="HTML"
              checked={skills.includes("HTML")}
              onChange={handleSkillChange}
            />
            <label htmlFor="HTML">HTML</label>
            <input
              type="checkbox"
              id="CSS"
              name="skill"
              value="CSS"
              checked={skills.includes("CSS")}
              onChange={handleSkillChange}
            />
            <label htmlFor="CSS">CSS</label>
            <input
              type="checkbox"
              id="JavaScript"
              name="skill"
              value="JavaScript"
              checked={skills.includes("JavaScript")}
              onChange={handleSkillChange}
            />
            <label htmlFor="JavaScript">JavaScript</label>
            <input
              type="checkbox"
              id="Java"
              name="skill"
              value="Java"
              checked={skills.includes("Java")}
              onChange={handleSkillChange}
            />
            <label htmlFor="Java">Java</label>
          </div>
        </div>

        <input type="submit" value="Enroll Student" />
        <input type="reset" value="Clear" />
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>
                  <b>{d.name}</b>
                  <br />
                  {d.gender}
                  <br />
                  {d.email}
                  <br />
                  <a href={d.website}>{d.website}</a>
                  <br />
                  
                  {d.skills.join(", ")}
                </td>
                <td>
                  <img src={d.image} alt={d.name}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default UserRegister;
