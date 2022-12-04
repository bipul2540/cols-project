import React from "react";
import styles from "./../../style/Sidebar.module.scss";

import { AiFillHome } from "react-icons/ai";
import { RiCommunityFill } from "react-icons/ri";
import { HiTrendingUp } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { MdQuiz } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link to={"/"} className={`${styles.option} ${styles.active}`}>
          <div className={styles.icon_field}>
            <AiFillHome className={styles.icon} />
          </div>
          <p className={styles.icon__text}>Dashboard</p>
        </Link>

        <Link to={"/community"} className={styles.option || "active"}>
          <div className={styles.icon_field}>
            <RiCommunityFill className={styles.icon} />
          </div>
          <p className={styles.icon__text}>Community & group</p>
        </Link>

        <Link to={"/trending"} className={styles.option}>
          <div className={styles.icon_field}>
            <HiTrendingUp className={styles.icon} />
          </div>
          <p className={styles.icon__text}>Trendings</p>
        </Link>

        <Link to={"/upskills"} className={styles.option}>
          <div className={styles.icon_field}>
            <GiSkills className={styles.icon} />
          </div>
          <p className={styles.icon__text}>Up skills</p>
        </Link>

        <Link to={"/solve-problems"} className={styles.option}>
          <div className={styles.icon_field}>
            <MdQuiz className={styles.icon} />
          </div>
          <p className={styles.icon__text}>Solve Problems</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
