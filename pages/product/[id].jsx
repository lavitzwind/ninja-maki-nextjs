import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";
import axios from "axios";

const Product = ({ sushi }) => {
	const [price, setPrice] = useState(sushi.prices[0]);
	const [amount, setAmount] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [extras, setExtras] = useState([]);

	const changePrice = (number) => {
		setPrice(price + number);
	};

	const handleAmount = (amountIndex) => {
		const difference = sushi.prices[amountIndex] - sushi.prices[amount];
		setAmount(amountIndex);
		changePrice(difference);
	};

	const handleChange = (e, option) => {
		const checked = e.target.checked;

		if (checked) {
			changePrice(option.price);
			setExtras((prev) => [...prev, option]);
		} else {
			changePrice(-option.price);
			setExtras(extras.filter((extra) => extra._id !== option._id));
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image
						src={sushi.img}
						width={500}
						height={500}
						alt={sushi.name}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{sushi.title}</h1>
				<span className={styles.price}>${price}</span>
				<p className={styles.desc}>{sushi.desc}</p>
				<h3 className={styles.choose}>Choose amount of maki rolls:</h3>
				<div className={styles.amount}>
					<div
						className={styles.amountRolls}
						onClick={() => {
							handleAmount(0);
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
							handleAmount(1);
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
							handleAmount(2);
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
					{sushi.extraSauces.map((option) => (
						<div className={styles.sauces} key={option._id}>
							<input
								type="checkbox"
								id={option.text}
								name={option.text}
								className={styles.checkbox}
								onChange={(e) => handleChange(e, option)}
							/>
							<label htmlFor={option.text}>{option.text}</label>
						</div>
					))}
				</div>
				<div className={styles.add}>
					<input
						onChange={(e) => setQuantity(e.target.value)}
						type="number"
						defaultValue={1}
						className={styles.quantity}
					/>
					<button className={styles.button}>Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(
		`http://localhost:3000/api/products/${params.id}`
	);
	return {
		props: {
			sushi: res.data,
		},
	};
};

export default Product;
