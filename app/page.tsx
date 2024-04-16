import Image from "next/image";
import styles from "./page.module.css";
import { portfolios } from "./_consts/portfolios";
import Link from "next/link";
import { contacts } from "./_consts/contacts";
import { skills } from "./_consts/skills";
import { works } from "./_consts/works";

export default function Home() {
  return (
    <>
      {/* Main Section */}
      <main className={`${styles.maxWidth} ${styles.main}`} id="home">
        <h1 className="heading-1 color-secondary">
          Hi! I am Syaina, <br />3 years experienced Front End Developer.
        </h1>
        <div className="main-img-container" style={{ position: "relative" }}>
          <Image
            src={"/images/main/main-1.png"}
            alt="Main 1 Image"
            width={560}
            height={457}
            quality={100}
          />
        </div>
      </main>

      {/* About Me Section */}
      <div
        id="about-me"
        className={`${styles.maxWidth} ${styles.aboutMeSection}`}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={"/images/main/main-2.png"}
            alt="Main 2 Image"
            width={503}
            height={382}
            quality={100}
          />
        </div>

        <div className={`${styles.maxWidth} ${styles.aboutMeContent}`}>
          <h2 className="heading-2 color-tertiary-secondary">Who I am</h2>
          <p className="text-secondary color-secondary">
            With over 2+ years of experience as a full-time Front End Developer,
            I have honed my skills in Typescript, with a focus on leveraging
            NextJS to develop features that prioritize user experience while
            minimizing page load times. My approach emphasizes generating
            reusable, readable code or components. Additionally, I possess a
            meticulous nature, which drives me to analyze and plan before
            embarking on any development.
          </p>

          <h3 className={styles.h3}>AQUIRED SKILL</h3>
          <div className={styles.skillContainer}>
            {skills.map((skill) => (
              <Image
                key={skill.id}
                className={styles.skillItem}
                width={40}
                height={40}
                src={skill.icon}
                alt={skill.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        className={`${styles.maxWidth} ${styles.experienceContainer}`}
      >
        <h2 className="heading-2 color-tertiary-secondary">
          WORK <br /> EXPERIENCE
        </h2>

        <div className={styles.periodContentContainer}>
          {works.map((work) => (
            <div className={styles.periodContent} key={work.id}>
              <div className={styles.periodContent__time}>
                <h2 className="heading-2 color-secondary">{work.period}</h2>
                <p className="text-secondary color-tertiary">{work.date}</p>
              </div>
              <div className={styles.periodBullet}></div>
              <div className={styles.periodContent__work}>
                <h3
                  className={`heading-3 color-secondary ${styles.periodContent__work__title}`}
                >
                  {work.title}
                </h3>
                <p
                  className={`text-secondary color-tertiary ${styles.periodContent__work__subtitle}`}
                >
                  at {work.company}
                </p>
                <p
                  className={`text-secondary color-secondary ${styles.periodContent__work__description}`}
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div
        id="portfolio"
        className={`${styles.sectionContainer} ${styles.portfolio}`}
      >
        {/* Portfolio Heading */}
        <div className={styles.portfolioHeading}>
          <h2 className="heading-2 color-tertiary-secondary">PORTFOLIO</h2>
        </div>

        {/* Portfolio Container */}
        {portfolios.map((portfolio) => {
          return (
            <div className={styles.portfolioContainer} key={portfolio.id}>
              <div className={styles.borderContainer}>
                <div className={styles.portfolioImgContainer}>
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={400}
                    height={300}
                  />
                </div>
              </div>

              <div className={styles.porfolioContent}>
                <h2 className="heading-2 color-secondary">{portfolio.title}</h2>
                <p
                  className={`text-secondary color-secondary ${styles.portfolioContent__text}`}
                  dangerouslySetInnerHTML={{
                    __html: portfolio.description,
                  }}
                ></p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Section */}
      <div id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <h2 className="text-primary color-tertiary-secondary">Contact</h2>
          <p className="text-secondary color-secondary">
            Any bussiness inquires or just chit chat for shares are very
            welcome. Please wait until very max in two days office for my
            response. Thank you for your caring :)
          </p>

          <div className={styles.socialMediaContainer}>
            {contacts.map((contact) => (
              <div className={styles.socialMedia__Item} key={contact.id}>
                <div className={styles.socialMedia__Item__IconContainer}>
                  <Image
                    src={contact.icon}
                    alt={contact.title}
                    width={20}
                    height={20}
                  />
                </div>
                <Link
                  href={contact.link}
                  className="text-secondary color-secondary"
                >
                  {contact.value}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
