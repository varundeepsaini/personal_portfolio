import React from "react";
import './style.css';

const Social = () => {
  return (
    <section className="social" id="social">
      <div className="max-width">
        <h2 className="title">My social handles</h2>
        <div className="serv-content">
            {/* <div className="card">
                <a href="https://www.codeforces.com/sojabhai" style={{ color: 'white' }}>
                    <div className="    box">
                        <i className="fab fa-facebook"></i>
                        <div className="text">Facebook</div>
                        <div className="text-sm">
                            <p>Just some updates and photos of my daily life, sometimes here I write articles too!</p>
                        </div>
                    </div>
                </a>
            </div> */}
            <div className="card">
                <a href="https://www.linkedin.com/in/varundeepsaini/" style={{ color: 'white' }}>
                    <div className="box">
                        <i className="fab fa-linkedin"></i>
                        <div className="text">LinkedIn</div>
                        <div className="text-sm">
                            <p>Open to connect and interact, currently looking for an internship would love to hear from recruiters.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card">
                <a href="https://github.com/varundeepsaini" style={{ color: 'white' }}>
                    <div className="box">
                        <i className="fab fa-github-alt"></i>
                        <div className="text">GitHub</div>
                        <div className="text-sm">
                            <p>I've pushed my projects on GitHub and contributed to a few projects going on in the open source community.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
