import { Filter } from "./Filter/Filter";
import { ListCountries } from "./ListCountries/ListCountries";
import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./PageListCountries.module.css";


export const PageListCountries = () => {
	return (
		<>
			<div className={styles.findCountrySection}>
				<SearchBar />
				<Filter />
			</div>
			<div className={styles.listCountryStyle}>
				<ListCountries />
			</div>
		</>
	);
};
