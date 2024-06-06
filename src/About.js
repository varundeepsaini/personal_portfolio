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
                <p> I am a computer science enthusiast with dual degrees in progress from Scaler School of Technology and Birla Institute of Technology and Science. Renowned for my achievements in competitive programming, I hold top ranks in Codeforces, AtCoder, and ICPC. I've created several projects using technologies like Go, Python, and Kotlin, ranging from microservices to data analytics and image processing tools. As president of the competitive programming club at Scaler, I lead and mentor peers, driving innovation and excellence. Explore my portfolio to see the passion and expertise I bring to technology.
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
