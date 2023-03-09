import styles from "./FlagCountry.module.css"
export const FlagCountry = ({ flag, name }) => {
    return  <img className={styles.flagCountry} src={flag} width={500} height={350} alt={`${name} flag`}></img> 
}