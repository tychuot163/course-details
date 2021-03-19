import React from "react";

const About = ({ title }) => (
  <div className="main-content bgclass">
    <h2 className="about-header">{title}</h2>
    <p className="about-content">
      The front end course directory lists many of the courses we teach on HTML,
      CSS, JavaScript and more! Be sure to visit the Teachers section to view a
      list of our talented teachers. Or visit the Courses section and select a
      topic -- HTML, CSS, or JavaScript -- to see a list of our courses.
    </p>
  </div>
);

export default About;
