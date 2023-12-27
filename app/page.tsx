import Image from "next/image";
import styles from "./page.module.css";
import cx from "classnames";
import { portfolios } from "./_consts/portfolios";
import Link from "next/link";
import { contacts } from "./_consts/contacts";

export default function Home() {
  return (
    <>
      {/* Main Section */}
      <main className={`${styles.maxWidth} ${styles.main}`}>
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
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src={"/images/techstack/javascript-logo.svg"}
              alt="Javascript"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src={"/images/techstack/typescript-logo.svg"}
              alt="Typescript"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src={"/images/techstack/python-logo.png"}
              alt="Python"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/laravel-logo.svg"
              alt="Laravel"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/html-logo.svg"
              alt="HTML5"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/css-logo.svg"
              alt="CSS3"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/sass-logo.svg"
              alt="Sass"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/nextjs-logo.svg"
              alt="NextJS"
            />
            <Image
              width={40}
              height={40}
              src="/images/techstack/reactjs-logo.svg"
              alt="ReactJS"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/react-query-logo.png"
              alt="React Query"
            />
            <Image
              width={40}
              height={40}
              src="/images/techstack/sonarqube-logo.png"
              alt="SonarQube"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/ant-design-logo.svg"
              alt="Ant Design"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/sentry-logo.png"
              alt="Sentry"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/jest-logo.png"
              alt="Jest"
            />
            <Image
              className={styles.skillItem}
              width={40}
              height={40}
              src="/images/techstack/rtl-logo.png"
              alt="React Testing Library"
            />
          </div>
        </div>
      </div>
      {/* Experience Section */}
      <div
        id="experience"
        className={`${styles.sectionContainer} ${styles.experienceContainer}`}
      >
        {/* ... */}
      </div>
      {/* Portfolio Section */}
      <div
        id="portfolio"
        className={`${styles.sectionContainer} ${styles.portfolio}`}
      >
        {/* Portfolio Heading */}
        <div className={styles.portfolioHeading}>
          <h2 className="heading-2 color-tertiary-secondary">PORTFOLIO</h2>
          {/* <div className={`${styles.portfolioBtnWrapper}`}>
            <button
              className={`${cx(
                styles.portfolioBtn,
                styles.active
              )} text-secondary color-secondary`}
            >
              All
            </button>
            <button
              className={`${cx(
                styles.portfolioBtn
                // styles.active
              )} text-secondary color-secondary`}
            >
              Development
            </button>
            <button
              className={`${cx(
                styles.portfolioBtn
                // styles.active
              )} text-secondary color-secondary`}
            >
              Design
            </button>
          </div> */}
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
      <div id={styles.contact}>
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
