import styles from "./PostHero.module.css";
import RightArrow from "../../../public/icons/righArrow.svg";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import Chuxly from "../../../public/images/chuxly.jpg";
import FNF from "../../../public/images/bookingii.png";
import Honey from "../../../public/images/honey.png";
import Nier from "../../../public/images/nier.png";
import Taco from "../../../public/images/taco.webp";
import LayoutWrapper from "../LayoutWrapper";

const projects = [
  {
    id: 1,
    name: "Chuxly",
    year: 2024,
    framework: "Next.js",
    src: Chuxly,
    link: "https://www.chuxly.com/",
    github: "https://github.com/ChristianWare/claro15",
    description:
      "Chuxly is an e-commerce website offering wireless, portable, and home theater speakers, along with headphones, components, and accessories.",
  },
  {
    id: 2,
    name: "Fonts & Footers",
    year: 2024,
    framework: "Next.js",
    src: FNF,
    link: "https://www.fontsandfooters.com/",
    github: "https://github.com/ChristianWare/fnfii.15",
    description:
      "Fonts & Footers is a web development agency specializing in creating fully functional e-commerce websites for small business owners, tailored to meet their unique needs.",
  },
  {
    id: 3,
    name: "Golden Drips",
    year: 2024,
    framework: "Next.js",
    src: Honey,
    link: "https://www.goldendrips.com/",
    github: "https://github.com/ChristianWare/honey",
    description:
      "Golden Drips is an e-commerce website dedicated to selling high-quality honey products across Arizona. The platform supports state-wide delivery with an easy-to-navigate user interface.",
  },
  {
    id: 4,
    name: "Taco Bell",
    year: 2024,
    framework: "Next.js with Sanity.io",
    src: Taco,
    link: "https://www.newtacobell.com/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
    description:
      "Taco Bell's redesigned website integrates a seamless user experience with a robust CMS powered by Sanity.io, showcasing the full menu and promotional offers in a visually engaging way.",
  },
  {
    id: 5,
    name: "Nier Transportation",
    year: 2024,
    framework: "Next.js",
    src: Nier,
    link: "https://www.niertransportation.com",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
    description:
      "Nier Transportation's website highlights a luxury black car service with features that make booking and navigation effortless for clients seeking reliable and premium transportation services.",
  },
];

const PostHero = () => {
  return (
    <section className={styles.container} id='projects'>
      <SectionTitle title='Recent Projects' />
      <LayoutWrapper>
        {projects.map((x) => (
          <div className={styles.content} key={x.id}>
            <div className={styles.box}>
              <div className={styles.boxTop}>
                <h2 className={styles.heading}>Details</h2>
                <ul className={styles.listBox}>
                  <li className={styles.listItem}>Name: {x.name}</li>
                  <li className={styles.listItem}>Year: {x.year}</li>
                  <li className={styles.listItem}>Framework: {x.framework}</li>
                </ul>
              </div>
              <Link href={x.link} target='_blank' className={styles.link}>
                Live Site
                <RightArrow className={styles.icon} />
              </Link>
            </div>
            <div className={styles.box}>
              <div className={styles.boxTop}>
                <h2 className={styles.heading}>Description</h2>
                <p className={styles.title}>{x.description}</p>
              </div>
              <Link href={x.github} target='_blank' className={styles.linkii}>
                Github Code
                <RightArrow className={styles.iconii} />
              </Link>
            </div>
            <div className={styles.box}>
              <h2 className={styles.heading}>Project Name: {x.name}</h2>
              <div className={styles.imgParent}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    fill
                    alt='image'
                    title='image'
                    className={styles.img}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </LayoutWrapper>
    </section>
  );
};
export default PostHero;
