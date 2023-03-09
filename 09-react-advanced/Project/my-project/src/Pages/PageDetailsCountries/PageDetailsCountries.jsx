import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonBackPage } from "./ButtonBackPage/ButtonBackPage";
import { DescriptionCountry } from "./DescriptionCountry/DescriptionCountry";
import { FlagCountry } from "./FlagCountry/FlagCountry";
import styles from "./PageDetailsCountries.module.css";

export const PageDetailsCountries = () => {
	const { countryName } = useParams();
	console.log(countryName);

	const [country, setCountry] = useState();

	useEffect(() => {
		fetch(
			`https://restcountries.com/v2/name/${countryName}?fields=name,capital,region,subregion,borders,flag&fullText=true `
		)
			.then(response => response.json())
			.then(data => setCountry(data[0]));
	}, [countryName]);

	return country ? (
		<div className={styles.pageDetailsCountriesStyle}>
			<ButtonBackPage />
			<FlagCountry flag={country.flag} name={country.name} />
			<div>
				<DescriptionCountry
					name={country.name}
					capital={country.capital}
					region={country.region}
					subregion={country.subregion}
					borders={country.borders}
				/>
			</div>
		</div>
	) : (
		<h2>No Country !</h2>
	);
};
