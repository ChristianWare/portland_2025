"use client";

import styles from "./SkillsSection.module.css";
import { JSX, useState, useEffect } from "react";
import NextJS from "../../../public/icons/next.svg";
import NextAuth from "../../../public/icons/nextAuth.svg";
import Node from "../../../public/icons/node.svg";
import Stripe from "../../../public/icons/stripe.svg";
import Vercel from "../../../public/icons/vercel.svg";
import GoogleAnalytics from "../../../public/icons/googleAnalytics.svg";
import ReactIcon from "../../../public/icons/react.svg";
import HTML from "../../../public/icons/html.svg";
import CSS from "../../../public/icons/css.svg";
import Javascript from "../../../public/icons/javascriptii.svg";
import MongoDB from "../../../public/icons/mongodb.svg";
import Prisma from "../../../public/icons/prisma.svg";
import Typescript from "../../../public/icons/typescriptii.svg";
import Strapi from "../../../public/icons/strapi.svg";
import Sanity from "../../../public/icons/sanity.svg";
import Contentful from "../../../public/icons/contentful.svg";
import Docker from "../../../public/icons/docker.svg";
import WordPress from "../../../public/icons/wordpress.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

const data = [
  {
    icon: <NextJS className={styles.icon} />,
    name: "Next Js",
  },
  {
    icon: <ReactIcon className={styles.icon} />,
    name: "React",
  },
  {
    icon: <HTML className={styles.icon} />,
    name: "HTML",
  },
  { icon: <CSS className={styles.icon} />, name: "CSS" },
  {
    icon: <Javascript className={styles.icon} />,
    name: "Javascript",
  },
  {
    icon: <MongoDB className={styles.icon} />,
    name: "Mongo DB",
  },
  {
    icon: <Prisma className={styles.icon} />,
    name: "Prisma",
  },
  {
    icon: <Typescript className={styles.icon} />,
    name: "Typescript",
  },
  {
    icon: <Vercel className={styles.icon} />,
    name: "Vercel",
  },
  {
    icon: <NextAuth className={styles.icon} />,
    name: "Next Auth",
  },
  {
    icon: <Node className={styles.icon} />,
    name: "Node",
  },
  {
    icon: <GoogleAnalytics className={styles.icon} />,
    name: "Google Analytics",
  },
  {
    icon: <Stripe className={styles.icon} />,
    name: "Stripe",
  },
  {
    icon: <Strapi className={styles.icon} />,
    name: "Strapi",
  },
  {
    icon: <Sanity className={styles.icon} />,
    name: "Sanity",
  },
  {
    icon: <Contentful className={styles.icon} />,
    name: "Contentful",
  },
  {
    icon: <Docker className={styles.icon} />,
    name: "Docker",
  },
  {
    icon: <WordPress className={styles.icon} />,
    name: "Word Press",
  },
] as const;

const SkillsSection = () => {
  const [activeIcon, setActiveIcon] = useState<JSX.Element | null>(null);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleHover = (icon: JSX.Element | null) => {
    setIsPaused(!!icon);
    setActiveIcon(icon);
  };

  return (
    <section className={styles.container}>
      <SectionTitle title='Skills' />
      <div className={styles.content}>
        <div className={styles.left}>
          <ul className={styles.list}>
            {data.map((item, index) => (
              <li
                key={index}
                className={styles.name}
                onMouseEnter={() => handleHover(item.icon)}
                onMouseLeave={() => handleHover(null)}
              >
                {index + 1}. {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          {isPaused && activeIcon ? activeIcon : data[currentIconIndex].icon}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
