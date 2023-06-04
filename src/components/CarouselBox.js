import React from "react";
import ReactCardCarousel from "react-card-carousel";

import styles from "./CarouselBox.module.css";

const CardList = [
  {
    img: "img/windows-demo.png",
  },
  {
    img: "img/macOS-demo.png",
  },
  {
    img: "img/linux-demo.png",
  },
];

function Card({ img }) {
  return (
    <div className={styles.cardItem}>
      <img src={img} className={styles.cardImage} />
    </div>
  );
}

export default function HomepageCarousel() {
  return (
    <div className={styles.carouselBox}>
      <ReactCardCarousel autoplay={true} spread={"wide"} autoplay_speed={5000}>
        {CardList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </ReactCardCarousel>
    </div>
  );
}
