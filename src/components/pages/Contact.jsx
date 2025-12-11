import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact Me</h2>
      <p>Reach out for collaborations, projects, or job opportunities.</p>
      <div className={styles.contactContainer}>
        <div className={styles.contactItem}>
          <h3>Email</h3>
          <p>sahilthakurxyz@gmail.com</p>
        </div>

        <div className={styles.contactItem}>
          <h3>Phone</h3>
          <p>+91-6006642782</p>
        </div>

        <div className={styles.contactItem}>
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://linkedin.com/in/sahil-thakur-735181203/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sahil-thakur-735181203
            </a>
          </p>
        </div>

        <div className={styles.contactItem}>
          <h3>GitHub</h3>
          <p>
            <a
              href="https://github.com/sahilthakurxyz"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sahilthakurxyz
            </a>
          </p>
        </div>

        <div className={styles.contactItem}>
          <h3>Portfolio</h3>
          <p>
            <a
              href="https://sahil-portfolio.com"
              target="_blank"
              rel="noreferrer"
            >
              sahil-portfolio.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
