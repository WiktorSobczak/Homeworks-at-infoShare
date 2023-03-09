import styles from "./DisplayComponentAfterStyling.module.css";
import ComponentStylization from './ComponentContainer/ComponentStylization';


function DisplayComponentAfterStyling() {
	return(
        <div className={styles.background}>
            <ComponentStylization/>
        </div>
    );
}
export default DisplayComponentAfterStyling;
