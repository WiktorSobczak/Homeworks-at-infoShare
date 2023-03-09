import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../Components/Layout/PageChangerColor/PageChangerColor.context";
import styles from "./ButtonBackPage.module.css";
import { ArrowBackOutline } from 'react-ionicons'

export const ButtonBackPage = () => {
	const { currentTheme } = useContext(ThemeContext);

	const navigate = useNavigate();
	return (
		<>
			
		<button 
 			onClick={() => navigate(-1)}
			className={styles.buttonBackPageStyle}
			style={{
				backgroundColor: currentTheme.background,
				color: currentTheme.foreground,
				boxShadow: currentTheme.boxShadow,
				}}>
				<ArrowBackOutline className={styles.arrowBackOutline } style={{
				backgroundColor: currentTheme.background,
				color: currentTheme.foreground,
			}} />
			Back
			</button>
			</>
	);
};
