import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.copy}>
        Web Developer
      </div>
      <h1 className={styles.heading}>CHRISTIAN WARE</h1>
    </section>
  );
};
export default Hero;
