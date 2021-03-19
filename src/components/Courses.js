import React from "react";
import { Route, NavLink } from "react-router-dom";
import { HTMLCourses } from "../data/task";
import CourseContainer from "./courses/CourseContainer";

const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Task/Quest</h2>
      <ul className="course-nav">
        <li>
          <NavLink to={`${match.url}`}>HTML</NavLink>
        </li>
      </ul>
    </div>
    {console.log(match)}
    <Route
      path={`${match.path}`}
      render={() => <CourseContainer data={HTMLCourses} />}
    />
  </div>
);

export default Courses;
