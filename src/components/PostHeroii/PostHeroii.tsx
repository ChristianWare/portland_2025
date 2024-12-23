import styles from "./PostHeroii.module.css";
import RightArrow from "../../../public/icons/righArrow.svg";
import Image from "next/image";
import Link from "next/link";
import FNF from "../../../public/images/fontsandfooters.png";

const data = [
  {
    id: 1,
    title: "Name: Fonts & Footers",
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

const PostHeroii = () => {
  return (
    <section className={styles.container}>
      {/* <div className={styles.topContent}>
        <h2 className={styles.mainHeading}>Fonts & Footers</h2>
      </div> */}
      <div className={styles.content}>
        <div className={styles.box}>
          <h2 className={styles.heading}>Project: Fonts & Footers</h2>
          <div className={styles.listBox}>
            <div className={styles.imgContainer}>
              <Image
                src={FNF}
                fill
                alt='image'
                title='image'
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <h2 className={styles.heading}>Description</h2>
          <div className={styles.listBox}>
            <h3 className={styles.title}>
              Fonts & Footers is a web development agency that focuses on
              building fully functional e-commerce websites for small business
              owners.
            </h3>
          </div>
        </div>
        <div className={styles.box}>
          <h2 className={styles.heading}>Details</h2>
          <ul className={styles.listBox}>
            {data.map((x) => (
              <li key={x.id} className={styles.listItem}>
                {x.title}
              </li>
            ))}
          </ul>
          {/* <div className={styles.readBox}>
              <RightArrow className={styles.icon} />
             
              <Link
                href='https://www.fontsandfooters.com/'
                target='_blank'
                className={styles.link}
              >
                Live Site
              </Link>
            </div> */}
          <Link
            href='https://www.fontsandfooters.com/'
            target='_blank'
            className={styles.link}
          >
            Live Site
            <RightArrow className={styles.icon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostHeroii;
