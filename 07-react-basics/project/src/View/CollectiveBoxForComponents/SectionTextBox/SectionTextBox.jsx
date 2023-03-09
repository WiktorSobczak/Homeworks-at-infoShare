import styles from "./SectionTextBox.module.css";
export function SectionTextBox(props) {
	return <div className={styles.sectionTextBox}>{props.children}</div>;
}
