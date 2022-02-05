import styles from "../styles/SushiCard.module.css";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SushiCard = () => {
	return (
		<div className={styles.container}>
			<Image src="/img/Sushi.jpeg" alt="sushi" width={250} height={250} />
			<h1 className={styles.title}>Shogun</h1>
			<p className={styles.desc}>
				Salmon, avocado, cucumber, wasabi, edamame, sesame seeds.
			</p>
			<p className={styles.price}>$10.00</p>
			<button className={styles.button}>
				Add to Cart
				<ArrowForwardIcon
					style={{
						marginLeft: "10px",
						color: "#fff",
					}}
				/>
			</button>
		</div>
	);
};

export default SushiCard;
