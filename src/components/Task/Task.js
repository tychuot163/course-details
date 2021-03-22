import React from "react";

const Task = (props) => (
  <li className="course media group">
    <img className="course-img" src={props.img} alt="course" />
    <div>
      <h3 style={{color:'black'}}>{props.title}</h3>
      <p style={{textAlign:'justify'}}>{props.desc}</p>
    </div>
  </li>
);

export default Task;
