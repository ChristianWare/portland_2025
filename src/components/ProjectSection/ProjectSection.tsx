"use client";

import styles from "./ProjectSection.module.css";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Chuxly from "../../../public/images/chuxly.jpg";
import FNF from "../../../public/images/fontsandfooters.png";
import Honey from "../../../public/images/honey.png";
import Nier from "../../../public/images/nier.png";
import Taco from "../../../public/images/taco.webp";

type ProjectItem = {
  name: string;
  src: StaticImageData;
};

const data: ProjectItem[] = [
  {
    name: "Chuxly",
    src: Chuxly,
  },
  {
    name: "Fonts & Footers",
    src: FNF,
  },
  {
    name: "Golden Drips",
    src: Honey,
  },
  {
    name: "Taco Bell",
    src: Taco,
  },
  {
    name: "Nier Transportation",
    src: Nier,
  },
  {
    name: "Portfolio Website",
    src: Chuxly,
  },
];

const ProjectSection = () => {
  const [activeItem, setActiveItem] = useState<ProjectItem | null>(null);

  const handleHover = (item: ProjectItem | null) => {
    setActiveItem(item);
  };

  return (
    <section className={styles.container}>
      <span className={styles.sectionTitle}>All Projects</span>
      <div className={styles.content}>
        <div className={styles.left}>
          <ul className={styles.list}>
            {data.map((item, index) => (
              <li
                key={index}
                className={styles.name}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => handleHover(null)}
              >
                {item.name}
              </li>
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
            <span className={styles.placeholder}>Hover over a Project</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
