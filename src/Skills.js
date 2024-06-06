import React from "react";
import './style.css';
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
            <div className="column left right">
                <div className="bars">
                    <div className="info">
                        <span>C/C++</span>
                    </div>
                    <div className="line c"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>JavaScript</span>
                    </div>
                    <div className="line js"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Python</span>
                    </div>
                    <div className="line python"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>MongoDB</span>
                    </div>
                    <div className="line mongo"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Selenium</span>
                    </div>
                    <div className="line selenium"></div>
                </div>
        </div>
            <div className="column right">
                <div className="bars">
                    <div className="info">
                        <span>SQL</span>
                    </div>
                    <div className="line sql"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Java</span>
                    </div>
                    <div className="line java"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>ReactJS</span>
                    </div>
                    <div className="line react"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>NodeJS</span>
                    </div>
                    <div className="line node"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Flutter</span>
                    </div>
                    <div className="line flutter"></div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default Skills;
