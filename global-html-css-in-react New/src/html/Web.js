import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/web.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Ex1 = () => {
  useEffect(() => {
    document.title = "This is a title";
  }, []);
  return (
    <>
      {/* Navigation -----------------------------------------------------*/}
      <nav>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <a href="#comments-section">Go to Comments</a>
        </h3>
      </nav>
      {/* Header ---------------------------------------------------------*/}
      <header>
        {/* logo */}
        <a href="https://www.codingninjas.com/" target="_blank">
          <img src="../media/logo.png" alt="" />
        </a>
        {/* Website Link */}
        <div>
          <p>
            <a href="https://www.codingninjas.com/" target="_blank">
              blog.codingninjas.in
            </a>
          </p>
          <p id={styles["blog-desc"]}>Coding Ninjas Official Blog</p>
        </div>
        {/* Header Image */}
        <img src="../media/cn2.png" alt="" />
      </header>
      {/* Main -----------------------------------------------------------*/}
      <div className={styles.pTagColorChange}>
        <main>
          {/* Blog Heading */}
          <header>
            <h1 id={styles["blog-title"]}>
              Five tips for front-end web development
            </h1>
          </header>
          <article>
            {/* Blog Image */}
            <div>
              <img
                src="../media/cn1.jpg"
                alt="Coding ninja"
                width="100%"
                height="500"
              />
            </div>
            {/* Content */}
            {/* Paragraph 1 */}
            {/* <p style={{color:'red'}}> */}
            <p>
              Don’t <>&nbsp;</> you just love exploring beautiful and neat sites
              with a clean user interface? While most of us would reply with an
              assertive ‘YES,’ little, do we know the kind of effort and skill
              that goes into making a website attractive and user-friendly. The
              secret to creating an impressive site is to master the art of
              front-end development, and no, it is not as easy as it seems!
            </p>
            {/* two paragraph started with 2 different lines */}
            <p>
              However, it is not impossible either. Here are five tips that’ll
              help you get better in front-end design and web development.
            </p>
            {/* Paragraph 2 */}
            {/* List */}
            <div className={`${styles.uppercase} ${styles.cursive}`}>
              <ol>
                <li>
                  <h4>Commenting</h4>
                  <p>
                    Commenting is one such practice that is often ignored by
                    programmers, especially for codes that are written by
                    multiple programmers. But remember, commenting is an
                    important part of project you create. With proper comments
                    and organised files its always easier for you or others to
                    jump in and understand where things are at and how they
                    work.{" "}
                  </p>
                </li>
                <li>
                  <h4>Invest In Productive Tools</h4>
                  <p>
                    The Internet is teeming with a host of web development
                    tools, from browser add-ons to smart plugins, the amount of
                    choices available now is massive! So, why not invest in some
                    really productive web tools that’ll help you improve your
                    front-end designing skills? Tools like Sublime Text, jQuery,
                    Emmet, Bootstrap, and Sass are nothing short of a godsend
                    for web developers.{" "}
                  </p>
                </li>
                <li>
                  <h4>Always Be Curious</h4>
                  <p>
                    A front-end developer has to keep himself/herself updated
                    continuously with the latest news and innovations in the
                    field. You need to take a proactive stand and learn new
                    things about front-end development from informative blogs
                    and videos. Following are some of the most informative and
                    useful learning sources for front-end developers -
                  </p>
                  <ul style={{ listStyleType: "square" }}>
                    <li>
                      <a
                        href="https://www.freecodecamp.org/news/front-end-developer-what-is-front-end-development-explained-in-plain-english/"
                        target="_blank"
                      >
                        Frontend Focus{" "}
                      </a>
                    </li>
                    <li>CSS Weekly </li>
                    <li>Javascript Weekly </li>
                    <li>Web Design Weekly</li>
                    <li>Codrops</li>
                    <li>ShopTalk Podcast</li>
                  </ul>
                </li>
                <li>
                  <h4> Refactor Your Code From Time To Time. </h4>
                  <p>
                    By “refactoring” your code, you’re only enhancing the code
                    without tampering with its functionality. This will improve
                    the quality and readability quotient of your code and the
                    more often you do it, your code will continually be updated
                    into a cleaner and fresher version of what it was before.
                    Apart from that, one of the most significant advantages that
                    refactoring offers is that it ensures your code remains free
                    from plagiarism.
                  </p>
                </li>
                <li>
                  <h4> Version Control </h4>
                  <p>
                    As a developer, version control is something that you must
                    know about. Version control systems let you keep track of
                    changes made to the code over time. And not just this, they
                    also make it easy to revert back to an earlier version if
                    you screw something up. Thus using verion control will save
                    you some sleepless nights for sure. One of the most widely
                    used version control systems is Git. Thus knowing git has
                    been a requirement for almost every development job these
                    days.
                  </p>
                </li>
              </ol>
            </div>
            <p>
              While these tips will surely help you become a better front-end
              designer, in the long run, you must always remember two things
              while designing your platform – keep it simple and neat, and don’t
              forget to create your signature style.
            </p>

            {/* Ending Paragraph */}
          </article>
        </main>

        
          <aside>
            <section id={styles["subscription"]} className={`${styles.widget}`}>
              <h5 class="widget-title">
                Subscribe now to stay updated with new technology trends
              </h5>

              <div id="subscribe-form">
                <form action="">
                  <label for="input-name">Name</label>

                  <input id="input-name" name="name" type="text" />

                  <label for="input-email">Email *</label>

                  <input
                    id="input-email"
                    name="input-email"
                    type="text"
                    required
                  />

                  <button class="sub-btn" type="submit">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </section>
          </aside>
        
        <div>
        <a href="#"> Back to Top </a>
        </div>
        {/* Footer ---------------------------------------------------------*/}
        <footer></footer>
      </div>
    </>
  );
};

export default Ex1;
