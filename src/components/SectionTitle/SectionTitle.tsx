import styles from "./SectionTitle.module.css";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className={styles.top}>
      <span className={styles.sectionTitle}>{title}</span>
    </div>
  );
};
export default SectionTitle;
