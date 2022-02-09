import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<Link href="/" passHref>
				<div className={styles.logo}>
					<div className={styles.logoText}>
						<div className={styles.logoText2}>Ninja</div> Maki
					</div>
					<div className={styles.logoText3}>Sushi Bar</div>
				</div>
			</Link>
			<div className={styles.itemCenter}>
				<ul className={styles.list}>
					<li className={styles.listItem}>Home</li>
					<li className={styles.listItem}>About</li>
					<li className={styles.listItem}>Menu</li>
					<li className={styles.listItem}>Contact</li>
					<li className={styles.listItem}>About Us</li>
				</ul>
			</div>
			<div className={styles.itemRight}>
				<div className={styles.hamburger} onClick={() => setOpen(!open)}>
					<div className={styles.line} />
					<div className={styles.line} />
					<div className={styles.line} />
				</div>
				<div className={styles.cart}>
					<div className={styles.texts}>
						<div className={styles.text}>931 281 232</div>
						<div className={styles.text}>ORDER NOW!</div>
					</div>
					<div className={styles.phoneWrapper}>
						<LocalPhoneIcon
							className={styles.svgPhone}
							style={{ fontSize: "40px" }}
						/>
					</div>
					<div className={styles.cartWrapper}>
						<ShoppingCartIcon
							className={styles.svgCart}
							style={{ fontSize: "30px" }}
						/>
						<div className={styles.counter}>2</div>
					</div>
				</div>
			</div>
			<ul
				onClick={() => setOpen(false)}
				className={styles.menu}
				style={{ right: open ? "0px" : "-50vw" }}
			>
				<li className={styles.menuItem}>Home</li>
				<li className={styles.menuItem}>About</li>
				<li className={styles.menuItem}>Menu</li>
				<li className={styles.menuItem}>Contact</li>
				<li className={styles.menuItem}>About Us</li>
			</ul>
		</div>
	);
};

export default Navbar;
