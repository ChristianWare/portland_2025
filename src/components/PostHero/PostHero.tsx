import styles from "./PostHero.module.css";
import RightArrow from "../../../public/icons/righArrow.svg";
import Image from "next/image";
import Link from "next/link";
import Chuxly from "../../../public/images/chuxly.jpg";

const data = [
  {
    id: 1,
    title: "Digital Strtegy",
  },
  {
    id: 1,
    title: "UX Design",
  },
  {
    id: 1,
    title: "UI Design",
  },
  {
    id: 1,
    title: "Shopify Development",
  },
  {
    id: 1,
    title: "Custom Shopify Apps",
  },
  {
    id: 1,
    title: "Platform Migrations",
  },
];

const PostHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <h2 className={styles.heading}>What we do</h2>
          <ul className={styles.listBox}>
            {data.map((x) => (
              <li key={x.id} className={styles.listItem}>
                {x.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.box}>
          <h2 className={styles.heading}>Latest Journal Entry</h2>
          <div className={styles.listBox}>
            <h3 className={styles.title}>
              CSS Modules vs Tailwind - Why Modules Win All of the Time
            </h3>
            <div className={styles.readBox}>
              <RightArrow className={styles.icon} />
              <Link href='/' className={styles.link}>
                2 Min Read
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h2 className={styles.heading}>Recent Projects</h2>
          <div className={styles.listBox}>
            <div className={styles.imgContainer}>
              <Image
                src={Chuxly}
                fill
                alt='image'
                title='image'
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PostHero;
