import styles from "./Description.module.css";
export function Description() {
	return (
		<section className={styles.sectionDescription}>
			<h3 className={styles.signature}>PERFUME</h3>
			<h1 className={styles.headerContent}>Gabrielle Essence Eau De Parfum</h1>
			<p className={styles.textContent}>
				A floral, solar and voluptuous interpretation composed by Olivier Polge,
				Perfumer-Creator for the Hose of CHANEL.
			</p>
		</section>
	);
}
