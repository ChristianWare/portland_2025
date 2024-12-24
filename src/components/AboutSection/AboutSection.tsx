import styles from "./AboutSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutSection = () => {
  return (
    <section className={styles.container} id='about'>
      <SectionTitle title='About me' />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              I am skilled in both front-end and back-end development, and I
              have the ability to create comprehensive web applications from
              start to finish. My tools of choice are Next.js/React.
            </h2>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copy}>
              I optimize web applications for speed, performance and SEO. They
              all have fast load times and an optimal performance across various
              devices and network conditions.
              <br />
              <br />
              Because of my background in design, and finance, I understand the
              aesthetic and business side to any project. While websites have to
              make good impressions on their visitors, they should also motivate
              them to action. This is what I aim to accomplish in all of my
              projects.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
