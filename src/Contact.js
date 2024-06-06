import React from "react";
import './style.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
            <div className="column left">
                <div className="text-proj">Get in Touch</div>
                <div className="icons">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <div className="info">
                            <div className="head">Name</div>
                            <div className="sub-title">Varun Deep Saini</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="info">
                            <div className="head">Address</div>
                            <div className="sub-title">Greater Noida, India</div>
                        </div>
                    </div>
                    <div className="row">
                        <i className="fas fa-envelope"></i>
                        <div className="info">
                            <div className="head">Email</div>
                            <div className="sub-title">deepsainivarun@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column right">
                <div className="text">Message me</div>
                <form action="https://formspree.io/f/xdoqrbyv" method="post">   
                    <div className="fields">
                        <div className="field name">
                            <label>
                                <input name="name" type="text" placeholder="Name" required />
                            </label>
                        </div>
                        <div className="field email">
                            <label>
                                <input name="email" type="email" placeholder="Email" required />
                            </label>
                        </div>
                    </div>
                    <div className="field">
                        <label>
                            <input type="text" name="subject" placeholder="Subject" required />
                        </label>
                    </div>
                    <div className="field textarea">
                        <label>
                            <textarea name="text" cols="30" rows="10" placeholder="Message.." required></textarea>
                        </label>
                    </div>
                    <div className="button-area">
                        <button type="submit">Send message</button>
                    </div>
                    <input type="hidden" name="_append" value="false" />
                </form>
            </div>
        </div>
    </div>
    </section>
  );
}

export default Contact;
