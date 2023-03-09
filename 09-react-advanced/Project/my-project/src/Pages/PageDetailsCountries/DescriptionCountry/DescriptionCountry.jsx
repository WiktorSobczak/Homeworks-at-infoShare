import { useContext } from "react";
import { ThemeContext } from "../../../Components/Layout/PageChangerColor/PageChangerColor.context";
import styles from "./DescriptionCountry.module.css";

export const DescriptionCountry = ({
	name,
	capital,
	region,
	subregion,
	borders,
}) => {
	const { currentTheme } = useContext(ThemeContext);
	return (
		<div className={styles.descriptionCountryStyle}>
			<h2>{name}</h2>
			<p>
				<b>Capital</b>: {capital}
			</p>
			<p>
				<b>Region</b>: {region}
			</p>
			<p>
				<b>Subregion</b>: {subregion}
			</p>
			<p className={styles.lineBorderCountry}>
				<b>Border Country</b>:
				{borders?.map(border => {
					return (
						<button key={border}
							style={{
								backgroundColor: currentTheme.backgroundBox,
								color: currentTheme.foreground,
							}}
							className={styles.buttonBorder}>
							{border}
						</button>
					);
				})}
			</p>
		</div>
	);
};
