import React from "react";
import Photo from "../images/Akhilesh.jpg";
import Email from "../images/envelope-solid.svg";
import Github from "../images/github.svg";

export default function Profile() {
  return (
    <div className="profile">
      <img src={Photo} alt="Akhilesh" className="photo"></img>
      <h1>Akhilesh R Madhyastha</h1>
      <h4>Frontend Developer</h4>
      <p>akhilesh@react.com</p>
      <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
        <button className="white-btn">
          <img className="btn-image" src={Email} alt="Email" />
          Email
        </button>
      </a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <button className="white-btn">
          <img className="btn-image" src={Github} alt="Github" />
          Github
        </button>
      </a>
      <h2 className="content-heading">About</h2>
      <p className="content">
        A React developer uses their programming skills to create
        JavaScript-based applications for web or mobile environments. They
        typically specialize in front-end development, such as building user
        interfaces (UI).
      </p>
      <h2 className="content-heading">Interests</h2>
      <p className="content">
        In addition to technical skills, Front-End Developers should have an
        interest in being service-oriented, and helping non-technical
        professionals with their technical needs. They need to have the ability
        to bring the ideas of the clients and team members to life.
      </p>
    </div>
  );
}
