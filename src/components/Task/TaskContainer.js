import React from "react";
import Task from "./Task";

const TaskContainer = ({ data }) => {
  let courses = data.map(course => {
    return (
      <Task
        title={course.title}
        desc={course.description}
        img={course.img_src}
        key={course.id}
      />
    );
  });
  return (
    <div>
      <ul>{courses}</ul>
    </div>
  );
};

export default TaskContainer;
