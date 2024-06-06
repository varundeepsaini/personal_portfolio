import React, { useEffect } from "react";
import Typed from "typed.js";
import './style.css';

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Competitive Programmer", "Developer", "Problem Setter", "Educator", "Problem Solver"],
      typeSpeed: 50,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Varun Deep Saini</div>
          <div className="text-3">And I'm a <span className="typing crazy"></span></div>
          <a href="https://www.linkedin.com/in/varundeepsaini/">Hire me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
