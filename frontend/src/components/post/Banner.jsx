import React from "react";
import classes from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={classes.bannerBox}>
      <div>
        <h1 className={classes.bannerHeader}>
          Bring <span className={classes.greenWord}>waste</span> to nearest
          recycling factories and get{" "}
          <span className={classes.greenWord}>points</span>
        </h1>
        <p className={classes.bannerText}>
          here you can provide factories with endless recyclable materials and
          get rewards to use in the store{" "}
        </p>
      </div>
      <div>
        <img src="./pics/images/bag.png" className={classes.pic} />
      </div>
    </div>
  );
};

export default Banner;
