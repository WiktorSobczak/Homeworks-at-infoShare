import picture from "./illustration-woman-online-mobile.svg" 
import styles from "./Picture.module.css"

function Picture() {
    return (
        
        <img className={styles.picture} src={picture} alt="pictureWoman"

        />
        
    )
}
export default Picture