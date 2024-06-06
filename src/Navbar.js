import React, { useState, useEffect } from "react";
import './style.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // Effect to attach and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="max-width">
        <div className="logo"><a href="#">V<span>DS</span></a></div>
        <ul className="menu">
          <li><a href="#home" className="menu-btn">Home</a></li>
          <li><a href="#about" className="menu-btn">About</a></li>
          <li><a href="#skills" className="menu-btn">Skills</a></li>
          {/* <li><a href="#social" className="menu-btn">Social</a></li>
          <li><a href="#projects" className="menu-btn">Projects</a></li> */}
          <li><a href="#contact" className="menu-btn">Contact</a></li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
