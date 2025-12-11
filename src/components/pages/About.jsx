import React, { useState } from "react";
import styles from "./About.module.css";
import MetaData from "../MetaData";
const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div id="about" className={styles.about}>
      <MetaData title="Know about Me" />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.aboutCol2}>
            <h1 className={styles.subTitle}>About Me</h1>
            <p className={styles.pColor}>
              I am a passionate Full-Stack MERN Developer with experience in
              building responsive and high-performance web applications. Skilled
              in React.js, Node.js, Express.js, MongoDB, and frontend
              technologies like HTML, CSS, Bootstrap, and Tailwind CSS. I have
              hands-on experience developing real-world projects including
              e-commerce platforms, chat applications, and cloud services. I
              enjoy solving complex problems and continuously improving my
              coding and problem-solving skills through projects and coding
              challenges. My focus is on writing clean, maintainable code while
              optimizing performance and user experience. I am proactive in
              learning new technologies and exploring modern web development
              tools like Redux Toolkit, Socket.io, and Docker. I thrive in
              collaborative environments and enjoy contributing to projects that
              create real value for users.
            </p>

            <div className={styles.tabTitles}>
              <p
                className={`${styles.tabLinks} ${
                  activeTab === "skills" ? styles.activeLink : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`${styles.tabLinks} ${
                  activeTab === "education" ? styles.activeLink : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
              <p
                className={`${styles.tabLinks} ${
                  activeTab === "experience" ? styles.activeLink : ""
                }`}
                onClick={() => opentab("experience")}
              >
                Experience
              </p>
            </div>

            <div
              className={`${styles.tabContents} ${
                activeTab === "skills" ? styles.activeTab : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Front-end:</span> JAVASCRIPT, Angular JS, Node JS, HTML,
                  CSS
                </li>
                <li>
                  <span>Web Development:</span> Web Application Development
                </li>
                <li>
                  <span>Programming languages:</span> C, JAVA, Data Structure
                  Algorithm (DSA)
                </li>
              </ul>
            </div>

            <div
              className={`${styles.tabContents} ${
                activeTab === "education" ? styles.activeTab : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>2013-14:</span> 10th - Govt. H.S.S From Jammu & Kashmir
                  (J&K) Board
                </li>
                <li>
                  <span>2015-16:</span> 12th - Govt. H.S.S in (J&K) Board
                </li>
                <li>
                  <span>2016-20:</span> B.Tech (Electronics and Communication)
                  From Punjab (MRSPTU)
                </li>
              </ul>
            </div>

            <div
              className={`${styles.tabContents} ${
                activeTab === "experience" ? styles.activeTab : ""
              }`}
              id="experience"
            >
              <ul className={styles.experienceList}>
                <li>
                  <span>Full-Stack MERN Developer:</span> Digitech System,
                  Jammu, India | Feb 2025 – Dec 2025
                  <p>
                    Built responsive UIs using HTML, CSS, JavaScript, and
                    Bootstrap; developed full-stack features with React,
                    Node.js, Express.js, and MongoDB; handled debugging,
                    testing, SEO, and performance optimization for real-world
                    business applications.
                  </p>
                </li>

                <li>
                  <span>MERN Developer:</span> Prodigy Legal, Jammu (Remote) |
                  May 2023 – Mar 2024
                  <p>
                    Worked remotely on developing features using React.js,
                    Node.js, Express.js, and MongoDB; created and integrated UI
                    components; fixed 40+ bugs, improving application
                    performance and stability.
                  </p>
                </li>

                <li>
                  <span>Frontend Developer Intern:</span> Newton School,
                  Bangalore (Remote) | Feb 2022 – Mar 2023
                  <p>
                    Gained hands-on experience in HTML, CSS, JavaScript, and
                    React.js; strengthened Data Structures & Algorithms (DSA)
                    skills; built responsive mini-projects like personal
                    portfolio, Netflix Clone, Calculator App, and Weather App.
                  </p>
                </li>

                <li>
                  <span>C-language Training:</span> Naresh IT Technologies
                  <p>
                    Completed foundational C programming training covering
                    variables, loops, functions, arrays, and problem-solving
                    basics.
                  </p>
                </li>

                <li>
                  <span>Embedded System Training:</span> 40 days - Chandigarh
                  <p>
                    Hands-on training in microcontrollers and embedded systems;
                    learned interfacing sensors, basic circuit programming, and
                    real-time applications.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
