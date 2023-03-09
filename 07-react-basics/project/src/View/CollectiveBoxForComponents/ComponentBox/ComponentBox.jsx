import styles from "./ComponentBox.module.css";
export function ComponentBox(props) {
	return <div className={styles.backgroundDisplay}>{props.children}</div>;
}
