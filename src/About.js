import React, { useEffect } from "react";
import Typed from "typed.js";
import './style.css';
import profile from './profile-1.png'

const About = () => {

  useEffect(() => {

    const typed = new Typed(".typing-2", {
      strings: ["Developer", "Competitive Programmer", "Problem Setter", "Mentor"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
            <div className="column left">
                <img src={profile} alt=""></img>
            </div>
            <div className="column right">
                <div className="text">I'm Varun and I'm a <span className="typing-2 crazy"></span></div>
                <p> I am an undergraduate at Indian Institute of Information Technology. In my short experience with
                    software industry, I've
                    developed Analytical thinking and collaboration skills. Being a quick and logical learner, I am
                    able to grasp anything from scratch.

                    I have led different clubs and teams successfully, also have been fortunate enough to guide
                    bright minds of IIIT Allahadbad in Data structures and algorithms. I am
                    interested in pushing the boundaries of technology with innovation in the fields of Software
                    Development, Cloud Computing and Machine Learning.
                    🚀🚀</p>
                <a href="https://drive.google.com/file/d/1WBBHgou-77qnr60rG6yL264GWVR1_h33/view">Download
                    CV</a>
            </div>
        </div>
    </div>
    </section>
  );
}

export default About;
