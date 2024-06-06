import React from "react";
import './style.css';
import { Slide } from "react-slideshow-image";  

const slides = [
    {
        title: 'Multimodal emotion detection',
        caption: 'Developed a model which is able to provide emotional intensity with the use of audio and visual interface.'
    },
    {
        title: 'Proxy Bot for google meet',
        caption:'A bot to automatically mark attendance and alarm user on detection of attendance in google meet'
    },
    {
        title: 'Cross platform media player',
        caption: 'A cross-platform media player with features including media controls, playlist, Shuffle, Speed Up and mouse gestures.'
    },
    {
        title: 'Fake news Classification',
        caption: 'Classification of fake news using Natural language processing and sentiment analysis, to predict whether news is fake or real'
    },
    {
        title: 'Extension for Codechef',
        caption: 'Chrome extension for Codechef used to swiftly copy all test cases of a problem in just a click of extension icon, with 300+ download on webstore'
    }
  ];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My projects</h2>
        <Slide>
            {
                slides.map((slide, index) => (
                <div key={index} className="card">
                    <div className="card">
                        <div className="text-proj">{slide.title}</div>
                            <p className="bug">{slide.caption}</p>
                    </div>
                </div>
                ))
            }
        </Slide>
        {/* <div className="carousel owl-carousel slideshow js-slideshow">
            <div className="card">
                <div className="box">
                    <div className="text-proj">Multimodal emotion detection</div>
                    <p className="bug">Developed a model which is able to provide emotional intensity with the use of
                        audio and
                        visual interface.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="text-proj">Proxy Bot for google meet</div>
                    <p className="bug">A bot to automatically mark attendance and alarm user on
                        detection of attendance in google meet</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="text-proj">Cross platform media player</div>
                    <p className="bug">A cross-platform media player with features
                        including media controls, playlist, Shuffle, Speed Up and
                        mouse gestures.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="text-proj">Fake news Classification</div>
                    <p className="bug">Classification of fake news using Natural language processing and sentiment
                        analysis, to
                        predict whether news is fake or real.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="text-proj">Extension for Codechef</div>
                    <p className="bug">Chrome extension for Codechef used to
                        swiftly copy all test cases of a problem in just
                        a click of extension icon, with 300+ download on webstore</p>
                </div>
            </div>
        </div> */}
    </div>
    </section>
  );
}

export default Projects;
