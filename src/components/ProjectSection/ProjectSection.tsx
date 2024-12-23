"use client";

import styles from "./ProjectSection.module.css";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Chuxly from "../../../public/images/chuxly.jpg";
import FNF from "../../../public/images/fontsandfooters.png";
import Honey from "../../../public/images/honey.png";
import Nier from "../../../public/images/nier.png";
import Taco from "../../../public/images/taco.webp";
import Link from "next/link";

type ProjectItem = {
  name: string;
  link: string;
  src: StaticImageData;
};

const data: ProjectItem[] = [
  {
    name: "Chuxly",
    src: Chuxly,
    link: "https://www.chuxly.com",
  },
  {
    name: "Fonts & Footers",
    src: FNF,
    link: "https://www.fontsandfooters.com",
  },
  {
    name: "Golden Drips",
    src: Honey,
    link: "https://www.goldendrips.com/",
  },
  {
    name: "Taco Bell",
    src: Taco,
    link: "https://www.livemas.dev",
  },
  {
    name: "Nier Transportation",
    src: Nier,
    link: "https://www.niertransportation.com",
  },
  // {
  //   name: "Portfolio Website",
  //   src: Chuxly,
  // },
];

const ProjectSection = () => {
  const [activeItem, setActiveItem] = useState<ProjectItem | null>(null);

  const handleHover = (item: ProjectItem | null) => {
    setActiveItem(item);
  };

  return (
    <section className={styles.container} id='projects'>
      <span className={styles.sectionTitle}>All Projects</span>
      <div className={styles.content}>
        <div className={styles.left}>
          <ul className={styles.list}>
            {data.map((item, index) => (
              <Link
                href={item.link}
                target='_blank'
                key={index}
                className={styles.name}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => handleHover(null)}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          {activeItem ? (
            <div className={styles.imgContainer}>
              <Image
                src={activeItem.src}
                alt={activeItem.name}
                className={styles.image}
              />
            </div>
          ) : (
            <span className={styles.placeholder}>Click on a Project</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
