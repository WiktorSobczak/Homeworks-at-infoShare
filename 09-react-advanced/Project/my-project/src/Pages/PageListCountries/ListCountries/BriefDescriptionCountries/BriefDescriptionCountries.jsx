import styles from "./BriefDescriptionCountries.module.css"
export const BriefDescriptionCountries = ({ population, capital }) => {
    return (
        <div className={styles.descriptionStyle}>
            <p className={styles.textDescriptionBoxCountry}><b>Population</b>: {population}</p>
            <p><b>Capital</b>: {capital }</p>
        </div>
    )
}