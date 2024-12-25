import styles from "./ContactSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import ChrisWare from "../../../public/images/author.png";
import ContactForm from "../ContactForm/ContactForm";
import TopNav from "../TopNav/TopNav";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <LayoutWrapper>
            <h2 className={styles.heading}>
              Thank you for taking the time to review my portfolio website. I
              look forward to speaking with you soon. Feel free to reach out to
              me with any questions you have.
            </h2>
          </LayoutWrapper>
        </div>
        <div id='contact' className={styles.sectionTitle}>
          <SectionTitle title='Contanct Me' />
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <h3 className={styles.sectionHeading}>More details</h3>
            <p className={styles.copy}>
              My development toolkit is centered around Next.js, a powerful
              React framework that enables the creation of high-performance,
              scalable web applications.
              <br />
              <br />I use TypeScript to ensure type safety and maintainable
              code, while MongoDB serves as my go-to database solution for
              handling complex data requirements. Additionally, I leverage tools
              like Git for version control and CI/CD pipelines to streamline
              deployment and ensure code quality.
            </p>
          </div>
          <div className={styles.bottomRight}>
            <h3 className={styles.sectionHeadingii}>Get in touch</h3>
            <div className={styles.brGrid}>
              <div className={styles.br1}>
                <address className={styles.addressBox}>
                  <span className={styles.address}>
                    Located in: Phoenix, AZ
                  </span>
                  <span className={styles.address}>
                    Originally From: New York City
                  </span>
                </address>
                <div className={styles.contactBox}>
                  <Link
                    href='mailto:chris.ware.dev@gmail.com'
                    className={styles.address}
                  >
                    chris.ware.dev@gmail.com
                  </Link>
                  <Link
                    href='https://github.com/ChristianWare'
                    target='_blank'
                    className={styles.address}
                  >
                    github.com/ChristianWare
                  </Link>
                  <Link
                    href='https://www.linkedin.com/in/christian-ware/'
                    target='_blank'
                    className={styles.address}
                  >
                    linkedin.com/in/christian-ware
                  </Link>
                  <Link href='tel:+6236326780' className={styles.address}>
                    623-335-4992
                  </Link>
                </div>
                <TopNav />
                <Image
                  src={ChrisWare}
                  alt='Christian Ware'
                  title='Christian Ware'
                  width={275}
                  height={275}
                  className={styles.img}
                />
              </div>
              <div className={styles.br2}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
