import styles from "./Logo.module.css";
import CWLogo from "../../../public/icons/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <CWLogo className={styles.logo} />
      <span className={styles.span}>CHRISTIAN WARE</span>
    </div>
  );
};
export default Logo;
