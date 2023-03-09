import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Components/Layout/PageChangerColor/PageChangerColor.context";
import { BriefDescriptionCountries } from "./BriefDescriptionCountries/BriefDescriptionCountries";
import { ItemCountries } from "./ItemCountries/ItemCountries";
import styles from "./ListCountries.module.css";

export const ListCountries = () => {
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
			{countries.map(country => {
				return (
					<div key={country.name}className={styles.boxCountry}>
						<div
							style={{
								backgroundColor: currentTheme.backgroundBox,
								color: currentTheme.foreground,
							}}
						key={country.name}
						>
							<ItemCountries
								key={country.name }
								flag={country.flag} name={country.name} />
							<BriefDescriptionCountries
								key={country.name}
								population={country.population}
								capital={country.capital}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
};
