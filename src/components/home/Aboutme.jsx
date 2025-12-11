import React, { useState } from "react";
import styles from "./about.module.css";
const Aboutme = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={styles["about-mainContainer"]}>
      <div className={styles["about-meDetail"]}>
        <h3>About Me</h3>
        <p>
          I am a passionate Full-Stack MERN Developer with experience in
          building responsive and high-performance web applications. Skilled in
          React.js, Node.js, Express.js, MongoDB, and frontend technologies like
          HTML, CSS, Bootstrap, and Tailwind CSS. I have hands-on experience
          developing real-world projects including e-commerce platforms, chat
          applications, and cloud services. I enjoy solving complex problems and
          continuously improving my coding and problem-solving skills through
          projects and coding challenges. My focus is on writing clean,
          maintainable code while optimizing performance and user experience. I
          am proactive in learning new technologies and exploring modern web
          development tools like Redux Toolkit, Socket.io, and Docker. I thrive
          in collaborative environments and enjoy contributing to projects that
          create real value for users.
        </p>
      </div>
      <div className={styles["about-tabContainer"]}>
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
              <span>Front-end:</span>HTML, CSS, JAVASCRIPT, React Js,
              Redux,Redux Toolkit, Bootstrap, Context API.
            </li>
            <li>
              <span>Back-end:</span> Node Js, Express Js, REST API,
            </li>
            <li>
              <span>Data Base:</span>Mongo DB,NoSQL
            </li>
            <li>
              <span>Data Structure And Algorithm:</span>JAVA, JAVASCRIPT
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
              <span>2016-20:</span> B.Tech (Electronics and Communication) From
              Punjab (MRSPTU)
            </li>
          </ul>
        </div>

        <div
          className={`${styles.tabContents} ${
            activeTab === "experience" ? styles.activeTab : ""
          }`}
          id="experience"
        >
          <ul>
            <li>
              <span>Full-Stack MERN Developer:</span> Digitech System, Jammu,
              India | Feb 2025 – Dec 2025
            </li>
            <li>
              <span>MERN Developer:</span> Prodigy Legal, Jammu (Remote) | May
              2023 – Mar 2024
            </li>
            <li>
              <span>Frontend Developer Intern:</span> Newton School, Bangalore
              (Remote) | Feb 2022 – Mar 2023
            </li>

            <li>
              <span>C-language:</span> Naresh IT Technologies
            </li>
            <li>
              <span>Embedded System:</span> 40 days - Training (Chandigarh)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
