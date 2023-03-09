import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../../Components/Layout/PageChangerColor/PageChangerColor.context";
import styles from "./Filter.module.css"

export const Filter = () => {
	const { currentTheme } = useContext(ThemeContext);
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch(
			"https://restcountries.com/v2/all?fields=name,capital,flag,population,regions"
		)
			.then(response => response.json())
			.then(data => setCountries(data));
	}, []);
	return (
		<>
			<select
				className={styles.filter}
				style={{
					backgroundColor: currentTheme.backgroundBox,
					color: currentTheme.foreground,
				}}
				value={false}
				onChange={e => setCountries(e.target.value)}>
				{countries.map(country => {
					return (
						<option value={country.name} key={country.name}>
							{country.name}
						</option>
					);
				})}
			</select>
		</>
	);
};
