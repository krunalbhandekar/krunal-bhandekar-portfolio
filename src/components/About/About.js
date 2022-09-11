import React from "react";
import { stackList,backstackList,techstackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <>
    {/* <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg> */}
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Krunal Bhandekar</strong>, Passionate Skilled, collaborative, and attentive Full Stack Web Developer specialization in MERN stack. I am a learner and explorer constantly seeking better quality, efficiency, and a healthy environment and   I enjoy problem-solving and learning from the challenges that come along. Thus, the challenges bring the best out of me.
            I built a number of web applications and 3 major projects and
                     I am looking for an environment that will allow me to implement the best of my knowledge.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <div className="AboutBio tag">
            Front-end
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
           <div className="AboutBio tag">
            Back-end
          </div>
          <Technologies>
            {backstackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
           <div className="AboutBio tag">
            Tech Stacks
          </div>
          <Technologies>
            {techstackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>

        </div>
      </div>
    </ContactWrapper>
    </>
  );
}

export default About;
