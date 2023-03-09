import { useContext } from "react";
import { ThemeContext } from "../PageChangerColor/PageChangerColor.context";
import styles from "./Header.module.css";
import { MoonOutline } from 'react-ionicons'

export const Header = () => {
    const { toggleDarkMode } = useContext(ThemeContext);
     const { currentTheme } = useContext(ThemeContext);

	return (
		<div className={styles.headerFrame}>
			<h1 className={styles.title}>Where in the world?</h1>
			<button style={{
			 backgroundColor: currentTheme.backgroundBox,
			 color: currentTheme.foreground,
			}} className={styles.buttonDarkMode} onClick={toggleDarkMode}>
				<MoonOutline style={{
			 backgroundColor: currentTheme.backgroundBox,
			 color: currentTheme.foreground,
			 }} className={styles.moonOutline } />
				Dark Mode
			</button>
		</div>
	);
};
