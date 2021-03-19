import React from "react";
import CharactersList from "../data/teachers";

const Characters = () => {
  let teachers = CharactersList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id}>
        <img className="teacher-img" src={teacher.img_src} alt="teacher" />
        <h3>{teacher.name}</h3>
        <p>{teacher.bio}</p>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Characters</h2>
      <ul className="group">{teachers}</ul>
    </div>
  );
};

export default Characters;
