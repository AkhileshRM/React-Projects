import React from "react";
import linkedinlogo from "../images/linkedin.svg";
import githublogo from "../images/square-github.svg";
import instagramlogo from "../images/square-instagram.svg";
import twitterlogo from "../images/square-x-twitter.svg";

export default function Footer() {
  return (
    <footer>
      <a href="https://linked.com" target="_blank"><img src={linkedinlogo} alt="logo" className="img-styles" /></a>
      <a href="https://github.com" target="_blank"><img src={githublogo} alt="logo" className="img-styles" /></a>
      <a href="https://instagram.com" target="_blank"><img src={instagramlogo} alt="logo" className="img-styles" /></a>
      <a href="https://twitter.com" target="_blank"><img src={twitterlogo} alt="logo" className="img-styles" /></a>
    </footer>
  );
}
