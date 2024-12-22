import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <LayoutWrapper>
            <h2 className={styles.heading}>
              Thank you for taking the time to review my portfolio. I look
              forward to speaking with you soon.Thank you for taking the time to
              review my portfolio.
            </h2>
          </LayoutWrapper>
        </div>
        <div className={styles.middle}>
          <h3 className={styles.sectionHeading}>what clients say</h3>
          <h3 className={styles.sectionHeadingii}>Get in touch</h3>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
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
          <div className={styles.bottomRight}>Contact form here</div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
