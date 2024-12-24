"use client";

import styles from "./WorkSection.module.css";
import Link from "next/link";
import Arrow from "../../../public/icons/righArrow.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

const WorkSection = () => {
  const data = [
    {
      title: "Freelance Developer",
      company: "(Self)",
    },
    {
      title: "Contract Web Developer",
      company: "(Kurt Nobel International)",
    },
    {
      title: "Contract Software Engineer",
      company: "(Joyus App)",
    },

    {
      title: "Software Engineer",
      company: "(Mentorworks)",
    },
    {
      title: "Contract Frontend Developer",
      company: "(Fandem)",
    },
  ];

  return (
    <section className={styles.container} id='resume'>
      <SectionTitle title='Work History' />

      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.sectionTitle}>My Experience</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p className={styles.copy}>
              Here is a brief summary of the places I have worked. Click here to
              download my resume.
            </p>
            <Link
              href='/Chris_Ware_Resume_2025.pdf'
              target='_blank'
              download={true}
              className={styles.resumeContainer}
            >
              Download Resume <Arrow className={styles.icon} />
            </Link>
          </div>
          <div className={styles.right}>
            <ul className={styles.list}>
              {data.map((x, index) => (
                <li key={index} className={styles.name}>
                  {x.title} - {x.company}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkSection;

/* {x.btn && (
                <div className={styles.btnContainer}>
                  <Button
                    btnType='tertairy'
                    text={x.btn}
                    href='/Chris_Ware_Resume_2024.pdf'
                    target='_blank'
                    download={true}
                  />
                </div>
              )} */
