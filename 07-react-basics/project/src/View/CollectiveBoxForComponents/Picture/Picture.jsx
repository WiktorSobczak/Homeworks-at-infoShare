import imageMobile from "./image-product-mobile.jpg";
import imageDesktop from "./image-product-desktop.jpg";
import styles from "./Picture.module.css";
export function Picture() {
	return (
		<>
			<img
				className={styles.imageMobile}
				src={imageMobile}
				alt="imagePerfume"
			/>
			<img
				className={styles.imageDesktop}
				src={imageDesktop}
				alt="imagePerfume"
			/>
		</>
	);
}
