import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

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
					{cart.products.map((product) => (
						<tr className={styles.tr} key={product._id}>
							<td>
								<div className={styles.imgContainer}>
									<Image
										src={product.img}
										width={100}
										height={100}
										alt=""
										className={styles.img}
									/>
								</div>
							</td>
							<td>
								<span className={styles.name}>{product.title}</span>
							</td>
							<td>
								<span className={styles.extras}>
									{product.extras.map((extra) => (
										<span key={extra._id}>{extra.text}, </span>
									))}
								</span>
							</td>
							<td>
								<span className={styles.price}>${product.price}</span>
							</td>
							<td>
								<span className={styles.quantity}>{product.quantity}</span>
							</td>
							<td>
								<span className={styles.total}>
									{product.price * product.quantity}
								</span>
							</td>
						</tr>
					))}
				</table>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>CART TOTAL</h1>
					<div className={styles.textWrapper}>
						<span className={styles.text}>Subtotal: {cart.total}</span>
						<span className={styles.text}>Discount: $0.00</span>
						<span className={styles.text}>Total: {cart.total}</span>
					</div>
					<button className={styles.button}>CHECKOUT NOW!</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
