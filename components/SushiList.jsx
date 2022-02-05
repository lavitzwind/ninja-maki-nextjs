import styles from "../styles/SushiList.module.css";

const SushiList = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE BEST SUSHI IN TOWN</h1>
			<p className={styles.desc}>
				We have a wide variety of sushi to choose from and we are always happy
				to serve you.
			</p>
		</div>
	);
};

export default SushiList;
