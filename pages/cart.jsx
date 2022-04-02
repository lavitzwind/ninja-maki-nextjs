import styles from "../styles/Cart.module.css";
import Image from "next/image";

const cart = () => {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<tr className={styles.trTitle}>
						<th>Product</th>
						<th>Name</th>
						<th>Extras</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
					<tr className={styles.tr}>
						<td>
							<div className={styles.imgContainer}>
								<Image
									src="/img/Sushi.jpeg"
									width={100}
									height={100}
									alt=""
									className={styles.img}
								/>
							</div>
						</td>
						<td>
							<span className={styles.name}>Shogun</span>
						</td>
						<td>
							<span className={styles.extras}>Soy, Tare, Tariyaki</span>
						</td>
						<td>
							<span className={styles.price}>$12.99</span>
						</td>
						<td>
							<span className={styles.quantity}>2</span>
						</td>
						<td>
							<span className={styles.total}>$25.98</span>
						</td>
					</tr>
					<tr className={styles.tr}>
						<td>
							<div className={styles.imgContainer}>
								<Image
									src="/img/Sushi.jpeg"
									width={100}
									height={100}
									alt=""
									className={styles.img}
								/>
							</div>
						</td>
						<td>
							<span className={styles.name}>Shogun</span>
						</td>
						<td>
							<span className={styles.extras}>Soy, Tare, Tariyaki</span>
						</td>
						<td>
							<span className={styles.price}>$12.99</span>
						</td>
						<td>
							<span className={styles.quantity}>2</span>
						</td>
						<td>
							<span className={styles.total}>$25.98</span>
						</td>
					</tr>
					<tr className={styles.tr}>
						<td>
							<div className={styles.imgContainer}>
								<Image
									src="/img/Sushi.jpeg"
									width={100}
									height={100}
									alt=""
									className={styles.img}
								/>
							</div>
						</td>
						<td>
							<span className={styles.name}>Shogun</span>
						</td>
						<td>
							<span className={styles.extras}>Soy, Tare, Tariyaki</span>
						</td>
						<td>
							<span className={styles.price}>$12.99</span>
						</td>
						<td>
							<span className={styles.quantity}>2</span>
						</td>
						<td>
							<span className={styles.total}>$25.98</span>
						</td>
					</tr>
				</table>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>CART TOTAL</h1>
					<div className={styles.textWrapper}>
						<span className={styles.text}>Subtotal: $155.88</span>
						<span className={styles.text}>Discount: $0.00</span>
						<span className={styles.text}>Total: $155.88</span>
					</div>
					<button className={styles.button}>CHECKOUT NOW!</button>
				</div>
			</div>
		</div>
	);
};

export default cart;
