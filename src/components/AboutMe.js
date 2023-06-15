import React, { useEffect, useRef } from "react";
import "./AboutMe.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const con_l_g = useRef(null);
  const con_l_b = useRef(null);
  const con_l_r = useRef(null);
  const con_l = useRef(null);
  const con_r_g = useRef(null);
  const con_r_b = useRef(null);
  const con_r_r = useRef(null);
  const con_r = useRef(null);
  useEffect(() => {
    const left = con_l.current;
    const left_r = con_l_r.current;
    const left_b = con_l_b.current;
    const left_g = con_l_g.current;
    const right = con_r.current;
    const right_r = con_r_r.current;
    const right_b = con_r_b.current;
    const right_g = con_r_g.current;
    gsap.to(left, {
      scrollTrigger: {
        trigger: left,
        start: "top-=120rem top+=100rem",
        onEnter: () => {
          left.classList.add("curten-left-a");
          left_r.classList.add("curten-left-r-a");
          left_b.classList.add("curten-left-b-a");
          left_g.classList.add("curten-left-g-a");
        },
        // markers: true,
      },
    });
    gsap.to(right, {
      scrollTrigger: {
        trigger: right,
        start: "top-=120rem top+=100rem",
        onEnter: () => {
          right.classList.add("curten-right-a");
          right_r.classList.add("curten-right-r-a");
          right_b.classList.add("curten-right-b-a");
          right_g.classList.add("curten-right-g-a");
        },
        // markers: true,
      },
    });
  }, []);
  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            And here you will find some more information About Me, What I do, My
            most Prominent Skill Sets and My contact informations
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                I'm a <strong>Full Stack Developer,</strong> building the
                Websites and Web Applications that leads to the success of the
                overall product. Here you can check out some of my works and
                personal projects in the{" "}
                <a rel="noreferrer" href="./#project">
                  Project
                </a>{" "}
                section.
              </p>
              <p class="about__content-details-para">
                I am quite active in LinkedIn and GitHub , always seeking new
                and interesting ways of <strong>Web Development</strong> so I
                can deliver better and improved products. Feel free to Connect
                or Follow me on my
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/akshat-tripathi-32780421b/"
                  target="_blank"
                >
                  Linkedin
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer"
                  href="https://github.com/TRITON1999"
                  target="_blank"
                >
                  GitHub
                </a>
                You can also Connect via email{" "}
                <strong>tripathiakshat675@gmail.com</strong>.
              </p>
              <p class="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills then don't hesitate to{" "}
                <strong> contact</strong> me.
              </p>
              <div className="curten-left-g" ref={con_l_g}></div>
              <div className="curten-left-r" ref={con_l_r}></div>
              <div className="curten-left-b" ref={con_l_b}></div>
              <div className="curten-left" ref={con_l}></div>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr">
              Contact
            </a>
          </div>
          <div class="about__content-skills">
            <div className="curten-right-g" ref={con_r_g}></div>
            <div className="curten-right-r" ref={con_r_r}></div>
            <div className="curten-right-b" ref={con_r_b}></div>
            <div className="curten-right" ref={con_r}></div>
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">Java</div>
              <div class="skills__skill">React</div>
              <div class="skills__skill">GIT</div>
              <div class="skills__skill">Github</div>
              <div class="skills__skill">Responsive Design</div>
              <div class="skills__skill">Terminal</div>
              <div class="skills__skill">UNIX</div>
              <div class="skills__skill">Node.js</div>
              <div class="skills__skill">Express.js</div>
              <div class="skills__skill">MongoDB</div>
              <div class="skills__skill">Data Structure</div>
              <div class="skills__skill">OS</div>
              <div class="skills__skill">DBMS</div>
              <div class="skills__skill">SQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
