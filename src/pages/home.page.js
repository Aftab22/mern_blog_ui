import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <React.Fragment>
    <h1>
      Hello , <span className="blue-scheme">Welcome</span> to my blog!
    </h1>
    <h3 className="green-scheme">MERN PROJECT </h3>
    <p>
      This is a single-page web application. Even though this is a project I
      made to learn NodeJS and MongoDB , I did add a few articles/blogs that
      people could find interesting and really useful.
    </p>
    <p>
      The articles are mainly about React and Node , but I do plan on adding
      more.
    </p>
    <p>
      The site is styled minimally because my main aim while building this was
      to get it to work and concentrate on learning more about the functionality
      .
    </p>
    <p>
      This Blog site is built using :
      <ul>
        <li className="green-scheme">MongoDB</li>
        <li className="yellow-scheme">Express</li>
        <li className="blue-scheme">ReactJS</li>
        <li className="red-scheme">NodeJS</li>
      </ul>
    </p>
    <p>It is being hosted on an Amazon AWS EC2 Instance.</p>
    <p>
      You could read more about it in the
      <Link to="/about"> About</Link> section.
    </p>
    <p>
      To do:
      <ul>
        <li>
          Learn and add an SMTP functionality to receive emails from my readers.
        </li>
        <li>Work om making the styling better.</li>
        <li>Experiment a little more with AWS.</li>
      </ul>
    </p>
  </React.Fragment>
);

export default HomePage;
