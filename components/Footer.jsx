import Image from "next/image";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Image
					src="/img/FooterImg.jpeg"
					alt="footer"
					objectFit="cover"
					layout="fill"
				/>
			</div>
			<div className={styles.item}>
				<div className={styles.contactWrapper}>
					<h1 className={styles.title}>Contact Us</h1>
					<p className={styles.address}>20 CitySt St. Toronto</p>
					<p className={styles.phone}>Phone: 416-477-2361</p>
					<p className={styles.email}>e-mail: ninjamaki@ninja-maki.bar</p>
					<p className={styles.hours}>
						Hours: Mon-Fri: 11am-9pm, Sat-Sun: 11am-8pm
					</p>
				</div>
				<div className={styles.socialMedia}>
					<div className={styles.social}>
						<a href="https://www.facebook.com/ninjamaki.bar">
							<FacebookIcon />
						</a>
						<a href="https://www.instagram.com/ninjamaki.bar">
							<InstagramIcon />
						</a>
						<a href="https://twitter.com/ninjamaki_bar">
							<TwitterIcon />
						</a>
					</div>
					<p className={styles.copyright}>
						Copyright © 2022 Ninjamaki Bar. All rights reserved.
					</p>
				</div>
			</div>
			<div className={styles.item}>
				<iframe
					className={styles.map}
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.80858407923!2d-79.51814067414323!3d43.71840381077066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses-419!2spe!4v1644041018642!5m2!1ses-419!2spe"
					width="432"
					height="350"
					style={{ border: "0" }}
					allowFullScreen=""
					loading="lazy"
				></iframe>
			</div>
		</div>
	);
};

export default Footer;
