import { useContext } from 'react';
import { Link } from "react-router-dom"
import { ThemeContext } from '../../../../Components/Layout/PageChangerColor/PageChangerColor.context';
import styles from "./ItemCountries.module.css"
export const ItemCountries = ({ flag, name }) => {
	const { currentTheme } = useContext(ThemeContext);
	return (
		<Link style={{
			backgroundColor: currentTheme.backgroundBox,
			color: currentTheme.foreground,
		}}
			className={styles.itemCountry} to={name}>
			<img src={flag} height="175" width="240" alt="flagCountry"></img>
			<h2 className={styles.nameCountry}>{name}</h2>
		</Link>
	);
};
