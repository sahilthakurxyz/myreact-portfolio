import React from "react";
import styles from "./Projects.module.css";
const Projects = () => {
  const projects = [
    {
      title: "DigiClouds Services",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      description:
        "Built responsive UI layouts, improved SEO by 80–90%, tested, debugged, optimized performance, and deployed on GoDaddy hosting.",
      github: "https://github.com/sahilthakurxyz/cartico-EW",
      demo: "https://www.digiclouds.in/",
    },
    {
      title: "CarticoEW",
      tech: "React.js, Redux Toolkit, Node.js, Express.js, MongoDB",
      description:
        "Developed scalable e-commerce platform with cart management, product filtering, optimized performance, deployed on Vercel & Render + Railway.",
      github: "https://github.com/sahilthakurxyz/cartico-EW",
      demo: "https://cartico-ew-payw.vercel.app/",
    },
    {
      title: "ChatApp",
      tech: "React.js, Node.js, Express.js, MongoDB, Socket.io",
      description:
        "Real-time chat application with online/offline status, messaging, last-seen, responsive design, deployed on Vercel and Render.",
      github: "https://github.com/sahilthakurxyz/chatApp",
      demo: "https://chat-app-mu-vert-33.vercel.app/",
    },
    {
      title: "Admin Dashboard",
      tech: "React.js, Tailwind CSS, Syncfusion Library",
      description:
        "Developed a fully responsive admin dashboard with charts, graphs, and interactive components. Built Ecommerce, Orders, Employees, and Customers modules using prewritten data as API simulation.",
      github: "https://github.com/sahilthakurxyz/Admin_dashboard",
      demo: "https://sahilthakurxyz.github.io/Admin_dashboard",
    },
    {
      title: "Currency Converter",
      tech: "HTML, CSS, JavaScript, API Integration",
      description:
        "Built a real-time currency converter fetching live exchange rates, country codes, and currency names via API. Useful for business and travel applications.",
      github: "https://github.com/sahilthakurxyz/currency-converter",
      demo: "https://sahilthakurxyz.github.io/currency-converter",
    },
  ];
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>My Projects</h2>
      <p>
        Here are some of the projects I have built showcasing my skills and
        expertise.
      </p>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p className={styles.tech}>
              <strong>Tech Stack:</strong> {project.tech}
            </p>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.links}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={styles.btn}
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className={styles.btn}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
