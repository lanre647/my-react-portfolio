import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />{" "}
      <h1><span>I'm Lanre Williams,</span> full-stack developer based in Nigeria.</h1>
      <p>
        I'm a Full-stack developer from Lagos, Nigeria with 4 years experience
        in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
