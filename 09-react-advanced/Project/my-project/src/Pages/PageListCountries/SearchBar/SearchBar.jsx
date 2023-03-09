import { useState, useContext } from "react";
import { ThemeContext } from "../../../Components/Layout/PageChangerColor/PageChangerColor.context";
import styles from "./SearchBar.module.css";
import { SearchOutline } from 'react-ionicons'



export const SearchBar = () => {
	const [value, setValue] = useState("Search for a Country...");
	const { currentTheme } = useContext(ThemeContext);

	return (
		<div>
			<SearchOutline color={'#858585'} className={styles.searchOutline } />
			<input
				className={styles.searchBar}
				style={{
					backgroundColor: currentTheme.backgroundBox,
					color: currentTheme.colorTextSearch,
				}}
				type="text"
				name="search"
				id="search"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</div>
	);
};
