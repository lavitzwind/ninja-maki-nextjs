import styles from "../styles/Whoweare.module.css";
import Image from "next/image";

const Whoweare = () => {
	const images = [
		"/img/whoweare.jpeg",
		"/img/whoweare2.jpeg",
		"/img/whoweare3.jpeg",
	];

	return (
		<div className={styles.container}>
			<h1 className={styles.titleContainer}>
				<h2 className={styles.whoweareText}>W</h2>
				<h2 className={styles.whoweareText}>H</h2>
				<h2 className={styles.whoweareText}>O</h2>
				<h2 className={styles.whoweareText}></h2>
				<h2 className={styles.whoweareText}>W</h2>
				<h2 className={styles.whoweareText}>E</h2>
				<h2 className={styles.whoweareText}></h2>
				<h2 className={styles.whoweareText}>A</h2>
				<h2 className={styles.whoweareText}>R</h2>
				<h2 className={styles.whoweareText}>E</h2>
			</h1>
			<div className={styles.logo}>
				<div className={styles.logoText}>
					<div className={styles.logoText2}>Ninja</div> Maki
				</div>
				<div className={styles.logoText}>
					<div className={styles.logoText3}>Sushi Bar</div>
				</div>
			</div>
			<div className={styles.whoweare}>
				<div className={styles.whoweareText2}>
					Ninja Maki Sushi Bar is a Japanese-style sushi bar that is located in
					the heart of the city of Toronto. We are a family-owned business that
					has a passion for sushi.
				</div>
				<div className={styles.whoweareImages}>
					{images.map((img, i) => (
						<div key={i} className={styles.whoweareImage}>
							<Image
								src={img}
								width={225}
								height={225}
								alt=""
								className={styles.whoweareImageRounded}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Whoweare;
