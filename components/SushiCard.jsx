import styles from "../styles/SushiCard.module.css";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const SushiCard = ({ sushi }) => {
	return (
		<div className={styles.container}>
			<Link href={`/product/${sushi._id}`} passHref>
				<Image
					src="/img/Sushi.jpeg"
					alt="sushi"
					width={250}
					height={250}
					className={styles.imgPointer}
				/>
			</Link>
			<h1 className={styles.title}>{sushi.title}</h1>
			<p className={styles.desc}>{sushi.desc}</p>
			<p className={styles.price}>{sushi.prices[0]}$</p>
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
