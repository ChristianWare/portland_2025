"use client";

import { useState, useEffect } from "react";

import styles from "./Logo.module.css";
import CWLogo from "../../../public/icons/logo.svg";

const Logo = () => {
  const [visible, setVisible] = useState(true);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {visible && (
        <div className={styles.logoContainer} onClick={scrollToTop}>
          <CWLogo className={styles.logo} />
          <span className={styles.span}>CHRISTIAN WARE</span>
        </div>
      )}
    </>
  );
};
export default Logo;
