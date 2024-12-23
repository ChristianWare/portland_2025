import styles from "./PostHero.module.css";
import RightArrow from "../../../public/icons/righArrow.svg";
import Image from "next/image";
import Link from "next/link";
import Chuxly from "../../../public/images/chuxly.jpg";

const data = [
  {
    id: 1,
    title: "Name: Chuxly",
  },
  {
    id: 2,
    title: "Year: 2024",
  },
  {
    id: 3,
    title: "Framework: Next.js",
  },
];

const PostHero = () => {
  return (
    <section className={styles.container}>
      <span className={styles.sectionTitle}>Recent Projects</span>
      <div className={styles.content}>
        <div className={styles.box}>
          <h2 className={styles.heading}>Details</h2>
          <ul className={styles.listBox}>
            {data.map((x) => (
              <li key={x.id} className={styles.listItem}>
                {x.title}
              </li>
            ))}
          </ul>
          <Link
            href='https://www.chuxly.com/'
            target='_blank'
            className={styles.link}
          >
            Live Site
          <RightArrow className={styles.icon} />
          </Link>
        </div>
        <div className={styles.box}>
          <h2 className={styles.heading}>Description</h2>
          <div className={styles.listBox}>
            <h3 className={styles.title}>
              Chuxly is an e-comemrce website offering wireless, portable, and
              home theater speakers; and headphones, components, and
              accessories.
            </h3>
          </div>
        </div>
        <div className={styles.box}>
          <h2 className={styles.heading}>Preview</h2>
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
