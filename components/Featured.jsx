import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.jpeg",
    "/img/featured2.jpeg",
    "/img/featured3.jpeg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  const handleDots = (dotValue) => {
    setIndex(dotValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleArrow("r");
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.arrowContainer}
          style={{ left: 0 }}
          onClick={() => handleArrow("l")}
        >
          <ArrowBackIosNewIcon
            className={styles.arrow}
            style={{ fontSize: "100px", color: "#f1faee" }}
          />
        </div>
        <div
          className={styles.wrapper}
          style={{ transform: `translateX(${-100 * index}vw)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
              <Image src={img} alt="" layout="fill" objectFit="fill" />
            </div>
          ))}
        </div>
        <div
          className={styles.arrowContainer}
          style={{ right: 0 }}
          onClick={() => handleArrow("r")}
        >
          <ArrowForwardIosIcon
            className={styles.arrow}
            style={{ fontSize: "100px", color: "#f1faee" }}
          />
        </div>
        <Link href="#menu-section" passHref>
          <button className={styles.button}>Order Now</button>
        </Link>
      </div>
      <div className={styles.dotContainer} id="about-section">
        <span className={styles.dots} onClick={() => handleDots(0)}></span>
        <span className={styles.dots} onClick={() => handleDots(1)}></span>
        <span className={styles.dots} onClick={() => handleDots(2)}></span>
      </div>
    </>
  );
};

export default Featured;
