import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactSection.module.css";
import Image from "next/image";
import ChrisWare from "../../../public/images/author.png";
import ContactForm from "../ContactForm/ContactForm";
import TopNav from "../TopNav/TopNav";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <LayoutWrapper>
            <h2 className={styles.heading}>
              Thank you for taking the time to review my portfolio. I look
              forward to speaking with you soon. Thank you for taking the time
              to review my portfolio.
            </h2>
          </LayoutWrapper>
        </div>
        {/* <div className={styles.middle}>
        </div> */}
        <div className={styles.bottom} id='contact'>
          <div className={styles.bottomLeft}>
            <h3 className={styles.sectionHeading}>what clients say</h3>
            <p className={styles.copy}>
              Studio Almond really raise the bar for Shopify and Shopify Plus
              agencies in Australasia. They really understand the consumer and
              how to craft a customer-led brand experience with Shopify.
              <br />
              <br />
              With most Shopify agencies, you generally get design-strong OR
              dev-strong which means you need to find someone else to fill the
              gap on either end. And then you generally also have to pick
              between customising an out-of-the-box theme or custom built theme,
              the former can limit brands, the latter often requires significant
              investment that isnt ideal for growing brands without big box
              capital. Studio Almond gave us the best of all worlds.
            </p>
          </div>
          <div className={styles.bottomRight}>
            <h3 className={styles.sectionHeadingii}>Get in touch</h3>
            <div className={styles.brGrid}>
              <div className={styles.br1}>
                <address>
                  <span className={styles.address}>L1/36 Karaka st </span>{" "}
                  <br />
                  <span className={styles.address}>eden terrace</span>
                  <br />
                  <span className={styles.address}>Auwckland 1010</span>
                  <br />
                  <span className={styles.address}>new zealand</span>
                </address>
                <div className={styles.contactBox}>
                  <div className={styles.address}>chris.ware.dev@gmail.com</div>
                  <div className={styles.address}>github.com/christianware</div>
                  <div className={styles.address}>
                    linkedin.com/christianware
                  </div>
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
