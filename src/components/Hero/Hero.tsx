import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <p className={styles.copy}>
        Next.js & React Developer
      </p>
      <h1 className={styles.heading}>CHRISTIAN WARE</h1>
    </section>
  );
};
export default Hero;
