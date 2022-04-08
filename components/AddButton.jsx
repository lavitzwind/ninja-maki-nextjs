import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
	return (
		<div onClick={() => setClose(false)} className={styles.mainAddButton}>
			Add New Sushi
		</div>
	);
};

export default AddButton;
