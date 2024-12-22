import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h2 className={styles.headingii}>CHRISTIAN WARE</h2>
      <p className={styles.copy}>
        &copy; 2025 Chris Ware - All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
