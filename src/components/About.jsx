import Button from "./Button";
import { Link, Element } from "react-scroll";

import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className="container section">
        <div className={styles.introContainer}>
          <div className={styles.regText}>Hi, my name is</div>
          <h1 className={styles.title}>Chavi Weisman-Miller</h1>

          <div className={styles.regText}>
            Finance graduate turned Front-End Developer, learning and building
            modern web applications with React
          </div>
          <Link to="aboutMeSection" smooth={true} duration={500}>
            <Button text={"About me"} style={"btn btn-1"} />
          </Link>
        </div>
      </div>
      <Element name="aboutMeSection">
        <div className={styles.aboutSection}>
          <div className="section container">
            <div className={styles.aboutMeTitle}>About Me</div>
            <p className={styles.aboutMeText}>
              After earning my degree in Finance at the University of Maryland
              and moving to Israel, I expected to find a career in the financial
              world. Instead, I found myself drawn to web programming - the
              creativity, the methodical thinking, and the satisfaction of
              problem solving. The aspects that interested me in finance -
              finding patterns, keeping things organized, and focusing on
              details - are the same qualities that drew me to coding and help
              me in writing clear, organized code.
            </p>
            <p className={styles.aboutMeText}>
              Since then, I've been focused on learning web development and
              building real projects. Starting with the Foundations course in
              The Odin Project, I learned the basics of web programming with raw
              JavaScript, HTML, and CSS.
            </p>
            <p className={styles.aboutMeText}>
              After completing this course, I immediately moved on to the
              Full-Stack JavaScript course where I further refined these
              languages and began coding with the React library. Currently, I am
              working through the Node.js module, learning Back-End Development
              skills with Express.
            </p>
            <Link to="portfolio" smooth={true} duration={500}>
              <Button text={"Portfolio"} style={"btn btn-2"} />
            </Link>
          </div>
        </div>
      </Element>
    </>
  );
};

export default About;
