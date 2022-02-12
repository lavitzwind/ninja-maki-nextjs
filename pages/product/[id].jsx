import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";

const Product = () => {
	const [amount, setAmount] = useState(0);

	const sushi = {
		id: 1,
		name: "Shogun",
		price: [10.99, 14.99, 18.99],
		image: "/img/Sushi.jpeg",
		desc: "Shogun Maki Roll with salmon, avocado, cucumber, and wasabi. Stuffed with spicy tuna, and topped with spicy tuna.",
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image
						src={sushi.image}
						width={500}
						height={500}
						alt={sushi.name}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{sushi.name}</h1>
				<span className={styles.price}>${sushi.price[amount]}</span>
				<p className={styles.desc}>{sushi.desc}</p>
				<h3 className={styles.choose}>Choose amount of maki rolls:</h3>
				<div className={styles.amount}>
					<div
						className={styles.amountRolls}
						onClick={() => {
							setAmount(0);
						}}
					>
						<Image
							src="/img/quantitySushi.jpg "
							width={100}
							height={100}
							alt="0"
						/>
						<span className={styles.number}>10</span>
					</div>
					<div
						className={styles.amountRolls}
						onClick={() => {
							setAmount(1);
						}}
					>
						<Image
							src="/img/quantitySushi.jpg "
							width={100}
							height={100}
							alt="0"
						/>
						<span className={styles.number}>15</span>
					</div>
					<div
						className={styles.amountRolls}
						onClick={() => {
							setAmount(2);
						}}
					>
						<Image
							src="/img/quantitySushi.jpg "
							width={100}
							height={100}
							alt="0"
						/>
						<span className={styles.number}>20</span>
					</div>
				</div>
				<h3 className={styles.extras}>Choice of extra sauces:</h3>
				<div className={styles.extrasContainer}>
					<div className={styles.sauces}>
						<input
							type="checkbox"
							id="sauce1"
							name="teriyaki"
							className={styles.checkbox}
						/>
						<label htmlFor="teriyaki">Teriyaki Sauce</label>
					</div>
					<div className={styles.sauces}>
						<input
							type="checkbox"
							id="sauce2"
							name="soy"
							className={styles.checkbox}
						/>
						<label htmlFor="soy">Soy Sauce</label>
					</div>
					<div className={styles.sauces}>
						<input
							type="checkbox"
							id="sauce1"
							name="tare"
							className={styles.checkbox}
						/>
						<label htmlFor="tare">Tare sauce</label>
					</div>
					<div className={styles.sauces}>
						<input
							type="checkbox"
							id="sauce1"
							name="goma"
							className={styles.checkbox}
						/>
						<label htmlFor="goma">Goma sauce</label>
					</div>
					<div className={styles.sauces}>
						<input
							type="checkbox"
							id="sauce1"
							name="tonkatsu"
							className={styles.checkbox}
						/>
						<label htmlFor="tonkatsu">Tonkatsu sauce</label>
					</div>
				</div>
				<div className={styles.add}>
					<input type="number" defaultValue={1} className={styles.quantity} />
					<button className={styles.button}>Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
