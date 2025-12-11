import React from "react";
import styles from "./myprojects.module.css";
const MyProjects = () => {
  return (
    <div id="project" className={styles["project"]}>
      <div className={styles["container"]}>
        <h1 className={styles["sub-title"]}>My Projects</h1>
        <div className={styles["project-list"]}>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <h2 className={styles["project-title"]}>Cartico-EW</h2>
            <p className={styles["project-p"]}>
              A scalable, responsive e-commerce platform built with MERN stack
              and Redux Toolkit, featuring cart management, product filtering,
              and optimized performance, deployed on Vercel and Render for
              reliable full-stack operation.
            </p>
            <a
              href="https://cartico-ew-payw.vercel.app/"
              target="_blank"
              className={styles["project-link"]}
            >
              use it!
            </a>
          </div>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-address-card"></i>
            <h2 className={styles["project-title"]}>Chat App</h2>
            <p className={styles["project-p"]}>
              A real-time chat application built with React.js, Node.js,
              Express.js, MongoDB, and Socket.io, featuring messaging,
              online/offline status, last-seen tracking, and deployed on Vercel
              and Render for seamless full-stack performance.
            </p>
            <a
              href="https://chat-app-mu-vert-33.vercel.app/"
              target="_blank"
              className={styles["project-link"]}
            >
              use it!
            </a>
          </div>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-address-card"></i>
            <h2 className={styles["project-title"]}>DigiCloud Services</h2>
            <p className={styles["project-p"]}>
              A responsive web application built with HTML, CSS, JavaScript, and
              Bootstrap, featuring optimized UI layouts, SEO improvements,
              performance tuning, and GoDaddy hosting deployment for reliable
              and fast web experience.
            </p>
            <a
              href="https://www.digiclouds.in/"
              target="_blank"
              className={styles["project-link"]}
            >
              visit it!
            </a>
          </div>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-address-card"></i>
            <h2 className={styles["project-title"]}>Admin-Dashboard</h2>
            <p className={styles["project-p"]}>
              Feature: React JS and Tailwind CSS were used to create this
              completely responsible admin dashboard web application. Work with
              the Syncfusion Library, which offers many fascinating and
              practical features, such as the ability to create graphs by simply
              providing data, include other real world features . Tech stack:
              React Js which use with HTML, Javascript and Tailwind CSS for
              Styling Contribution: There are numerous different components,
              including Ecommerce (which displays statistics on earnings, total
              customers, items, sales revenue, and expense budget with a graph
              utilizing prewritten data in a project similar to an api) Similar
              to e-commerce, there are a number of components, including Orders,
              Employees, and Customers, for which I have prewritten data that I
              use as an Api from my data file.
            </p>
            <a
              href="https://sahilthakurxyz.github.io/Admin_dashboard"
              target="_blank"
              className={styles["project-link"]}
            >
              visit it!
            </a>
          </div>
          <div className={styles["project-item"]}>
            <i className="fa-solid fa-file"></i>
            <h2 className={styles["project-title"]}>Currency Converter</h2>
            <p className={styles["project-p"]}>
              Feature : This app is used to convert one currency into another
              while the exchange rate of the other currency is changing in
              realtime. use API to pull the names, country codes, and currencies
              of every country. API https://api.frankfurter.app/currencies Tech
              stack: HTML, CSS, JAVASCRIPT Contribution : The purpose of the
              currency converter is to change one currency into another. You
              will benefit greatly from its numerous useful applications for
              both enterprises and tourists.
            </p>
            <a
              href="https://sahilthakurxyz.github.io/currency-converter"
              target="_blank"
              className={styles["project-link"]}
            >
              check this!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
