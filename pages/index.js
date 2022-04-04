import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import SushiList from "../components/SushiList";
import Whoweare from "../components/Whoweare";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ sushiList }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ninja Maki | Sushir Bar Online</title>
				<meta name="description" content="Best sushi bar in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<Whoweare />
			<SushiList sushiList={sushiList} />
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get("http://localhost:3000/api/products");
	return {
		props: {
			sushiList: res.data,
		},
	};
};
