import React from "react";
import clsx from "clsx";
import styles from "./HomepageCarousel.module.css";
import ReactCardCarousel from "react-card-carousel";

const CardList = [
  {
    img: "img/windows-demo.png",
  },
  {
    img: "img/linux-demo.png",
  },
  {
    img: "img/windows-demo.png",
  },
];

function Card({ img }) {
  return (
    <div className="text--center">
      <img src={img} className={styles.cardImage} />
    </div>
  );
}

export default function HomepageCarousel() {
  return (
    <section className={styles.carousel}>
      <div className="container">
        <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </ReactCardCarousel>
      </div>
    </section>
  );
}
