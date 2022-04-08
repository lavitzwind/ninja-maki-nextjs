import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import SushiList from "../components/SushiList";
import Whoweare from "../components/Whoweare";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";

export default function Home({ sushiList, admin }) {
	const [close, setClose] = useState(true);
	return (
		<div className={styles.container}>
			<Head>
				<title>Ninja Maki | Sushi Bar Online</title>
				<meta name="description" content="Best sushi bar in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Featured />
			<Whoweare />
			{admin && <AddButton setClose={setClose} />}
			<SushiList sushiList={sushiList} />
			{!close && <Add />}
		</div>
	);
}

export const getServerSideProps = async (ctx) => {
	const myCookie = ctx.req?.cookies || "";
	let admin = false;

	if (myCookie.token === process.env.TOKEN) {
		admin = true;
	}

	const res = await axios.get("http://localhost:3000/api/products");
	return {
		props: {
			sushiList: res.data,
			admin,
		},
	};
};
