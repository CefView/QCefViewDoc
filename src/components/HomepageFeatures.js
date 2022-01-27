import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    Svg: "img/easy-to-use.svg",
    title: (
      <Translate id="index.FeatureList.easyToUseTitle">Easy to Use</Translate>
    ),
    description: (
      <Translate id="index.FeatureList.easyToUseDesc">
        QCefView was designed from the ground up to be easily used to leverage
        the powerful capabilities of lib CEF with Qt framework.
      </Translate>
    ),
  },
  {
    Svg: "img/cross-platform-support.svg",
    title: (
      <Translate id="index.FeatureList.crossPlatformTitle">
        Cross-Platform Support
      </Translate>
    ),
    description: (
      <Translate id="index.FeatureList.crossPlatformDesc">
        QCefView was also implemented as a cross-platform component which works
        perfectly on Windows, macOS and Linux.
      </Translate>
    ),
  },
  {
    Svg: "img/powered-by-qt.svg",
    title: (
      <Translate id="index.FeatureList.poweredByQtTitle">
        Powered by Qt
      </Translate>
    ),
    description: (
      <Translate id="index.FeatureList.poweredByQtDesc">
        QCefView encapsulated the lib CEF without CEF stuff exposed.Use QCefView
        like any other widgets in Qt framework to build hybrid application.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.featuresSec}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
