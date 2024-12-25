import styles from "./SectionTitle.module.css";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className={styles.top}>
      <div className={styles.sectionTitle}>{title}</div>
    </div>
  );
};
export default SectionTitle;
