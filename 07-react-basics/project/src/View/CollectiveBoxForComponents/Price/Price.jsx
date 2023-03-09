import cart from "./icon-cart.svg";
import styles from "./Price.module.css";
export function Price() {
	return (
		<section className={styles.sectionBuy}>
			<div className={styles.priceContainer}>
				<ins className={styles.secondPrice}>$149.99</ins>
				<del className={styles.firstPrice}>$169.99</del>
			</div>
			<button className={styles.buttonAddToCart}>
				<img className={styles.imageInButton} src={cart} alt="cart" />
				<p className={styles.textInButton}>Add to Cart</p>
			</button>
		</section>
	);
}
