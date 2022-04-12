import styles from "../styles/SushiList.module.css";
import SushiCard from "./SushiCard";

const SushiList = ({ sushiList }) => {
  return (
    <div className={styles.container} id="menu-section">
      <h1 className={styles.title}>THE BEST SUSHI IN TOWN</h1>
      <p className={styles.desc}>
        We have a wide variety of sushi to choose from and we are always happy
        to serve you.
      </p>
      <div className={styles.wrapper}>
        {sushiList.map((sushi) => (
          <SushiCard key={sushi._id} sushi={sushi} />
        ))}
      </div>
    </div>
  );
};

export default SushiList;
