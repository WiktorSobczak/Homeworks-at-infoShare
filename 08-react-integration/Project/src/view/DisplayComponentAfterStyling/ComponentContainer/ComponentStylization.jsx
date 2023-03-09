import styles from "./ComponentStylization.module.css";
import { DisplayContent } from "./DisplayContent/DisplayContent";
import Picture from "./Picture/Picture";

function ComponentStylization() {
	return (
		<div className={styles.componentStylization}>
			<Picture />
			<DisplayContent />
		</div>
	);
}
export default ComponentStylization;
