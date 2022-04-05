import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {
	const status = order.status;

	const statusClass = (index) => {
		if (index - status < 1) return styles.done;
		if (index - status === 1) return styles.inProgress;
		if (index - status > 1) return styles.unDone;
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.row}>
					<table className={styles.table}>
						<tr className={styles.trTitle}>
							<th>Order ID</th>
							<th>Customer</th>
							<th>Address</th>
							<th>Total</th>
						</tr>
						<tr className={styles.tr}>
							<td>
								<span className={styles.id}>{order._id}</span>{" "}
							</td>
							<td>
								<span className={styles.name}>{order.customer}</span>
							</td>
							<td>
								<span className={styles.address}>{order.address}</span>
							</td>
							<td>
								<span className={styles.total}>${order.total}</span>
							</td>
						</tr>
					</table>
				</div>
				<div className={styles.row}>
					<div className={statusClass(0)}>
						<Image src="/img/paid.png" width={30} height={30} alt="" />
						<span className={styles.paid}>Payment</span>
						<CheckCircleIcon
							className={styles.checkedIcon}
							style={{
								color: "#00C853",
							}}
						/>
					</div>
					<div className={statusClass(1)}>
						<Image src="/img/bake.png" width={30} height={30} alt="" />
						<span className={styles.paid}>Preparing</span>
						<CheckCircleIcon
							className={styles.checkedIcon}
							style={{
								color: "#00C853",
							}}
						/>
					</div>
					<div className={statusClass(2)}>
						<Image src="/img/bike.png" width={30} height={30} alt="" />
						<span className={styles.paid}>On the way</span>
						<CheckCircleIcon
							className={styles.checkedIcon}
							style={{
								color: "#00C853",
							}}
						/>
					</div>
					<div className={statusClass(3)}>
						<Image src="/img/delivered.png" width={30} height={30} alt="" />
						<span className={styles.paid}>Delivered</span>
						<CheckCircleIcon
							className={styles.checkedIcon}
							style={{
								color: "#00C853",
							}}
						/>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>CART TOTAL</h1>
					<div className={styles.textWrapper}>
						<span className={styles.text}>Subtotal: $12.99</span>
						<span className={styles.text}>Discount: $0.00</span>
						<span className={styles.text}>Total: $12.99</span>
					</div>
					<button disabled className={styles.button}>
						PAID
					</button>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
	return {
		props: { order: res.data },
	};
};

export default Order;
