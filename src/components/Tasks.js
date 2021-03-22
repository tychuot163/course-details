import React from "react";
import { Route, NavLink } from "react-router-dom";
import { TaskQuest } from "../data/task";
import TaskContainer from "./Task/TaskContainer";

const Tasks = ({ match }) => (
  <div className="main-content courses bgtask">
    <div className="course-header group">
      <h2 style={{textAlign:'center', fontSize:"40px", padding:'20px'}}>Task/Quest</h2>
    </div>
    {console.log(match)}
    <Route
      path={`${match.path}`}
      render={() => <TaskContainer data={TaskQuest} />}
    />
  </div>
);

export default Tasks;
