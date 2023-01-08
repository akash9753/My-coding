import React from "react";
import styles from "../styles/resumeproject.module.css";
import { Link } from "react-router-dom";
const ResumeProject = () => {
  return (
    <>
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <header id={styles["bodyHeader"]}>
        <nav>
          <ul
            className={`${styles.HorizontalList} ${styles.textCenter} ${styles.navMenu}`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div id={styles["name-social-container"]}>
          <div className={`${styles.textCenter}`}>
            <h1 id={styles["my-name"]}>Elon Musk</h1>
          </div>
        </div>

        <div>
          <ul
            className={`${styles.HorizontalList} ${styles.textCenter} ${styles.socialIcons}`}
          >
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-stack-overflow"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-quora"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section id={styles["about"]}>
          <div id={styles["myImage"]}>
            <img src="/media/my_image.jpg" alt="my image" />
          </div>

          <div id={styles["about-para"]}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and{" "}
              <span className={`${styles.textHighlight}`}>
                typesetting industry
              </span>
              . Lorem Ipsum has been the industry's standard{" "}
              <span className={`${styles.textHighlight}`}>dummy text ever</span>{" "}
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s{" "}
              <span className={`${styles.textHighlight}`}>
                with the release of Letraset
              </span>{" "}
              sheets containing Lorem Ipsum.
            </p>
          </div>
        </section>

        <section id={styles["skills"]}>
          <h1 className={`${styles.sectionHeading} ${styles.mb75px}}`}>
            <span>
              <i className="fas fa-chalkboard-teacher"></i>
            </span>
            <span>SKILLS</span>
          </h1>
          <div id={styles["skillsDisplay"]}>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.htmlPercent}`}>
                <div className={`${styles.skillName}`}>
                  <span>Html</span>
                </div>
              </div>
            </div>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.cssPercent} `}>
                <div className={`${styles.skillName}`}>
                  <span>Css</span>
                </div>
              </div>
            </div>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.javascriptPercent}`}>
                <div className={`${styles.skillName}`}>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>

          <div id={styles["skillsDisplay"]}>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.htmlPercent}`}>
                <div className={`${styles.skillName}`}>
                  <span>Html</span>
                </div>
              </div>
            </div>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.cssPercent} `}>
                <div className={`${styles.skillName}`}>
                  <span>Css</span>
                </div>
              </div>
            </div>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.javascriptPercent}`}>
                <div className={`${styles.skillName}`}>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
          <div id={styles["skillsDisplay"]}>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.htmlPercent}`}>
                <div className={`${styles.skillName}`}>
                  <span>Html</span>
                </div>
              </div>
            </div>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.cssPercent} `}>
                <div className={`${styles.skillName}`}>
                  <span>Css</span>
                </div>
              </div>
            </div>
            <div className={`${styles.skillProgress}`}>
              <div className={`${styles.javascriptPercent}`}>
                <div className={`${styles.skillName}`}>
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={styles["experience"]}>
        <h1 className={`${styles.sectionHeading} ${styles.mb75px}}`}>
            <span>
              <i className="fas fa-briefcase"></i>
            </span>
            <span>Work Experience</span>
          </h1>

          <div className={`${styles.timeline}`}>
            <div className={`${styles.timelineBox}`}></div>
            <div className={`${styles.timelineBox}`}></div>
            <div className={`${styles.timelineBox}`}></div>
            <div className={`${styles.timelineBox}`}></div>
            <div className={`${styles.timelineDevider}`}>
              <div className={`${styles.timelineTraveller}`}>
              <i class="fa-solid fa-plane"></i>
              </div>
            </div>
          </div>
          
        </section>
        <section id={styles["education"]}>
          Education
        </section>
        <section id={styles["portfolio"]}>
          Portfolio
        </section>
        <section id={styles["contact"]}>
          Contact
        </section>
      </main>
    </>
  );
};

export default ResumeProject;
