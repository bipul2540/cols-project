import React from "react";
import Avatar from "react-avatar";
import styles from "./../../style/LogoutCard.module.scss";
import { AiFillSetting } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utils/useUser";
import toast from "react-hot-toast";

const LogoutCard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("your have sucessfully logged out.");
    navigate("/auth/login", {
      state: {
        isUserLoggedOut: true,
      },
    });
  };

  const user = useUser();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.title}>
            <Avatar
              name={user ? user.name : ""}
              size='30'
              textSizeRatio={1.75}
              round
              color='#32bea6'
            />
            <p className={styles.username}>{user && user.name}</p>
          </div>
          <p className={styles.linkToProfile}>see all profiles</p>
        </div>

        <div className={styles.options}>
          <div className={styles.option}>
            <div className={styles.iconBox}>
              <AiFillSetting className={styles.icon} />
            </div>
            <p className={styles.iconInfo}>Settings & privacy</p>
          </div>

          <div className={styles.option}>
            <div className={styles.iconBox}>
              <IoMdHelpCircle className={styles.icon} />
            </div>
            <p className={styles.iconInfo}>Help & support</p>
          </div>

          <div className={styles.option}>
            <div className={styles.iconBox}>
              <MdFeedback className={styles.icon} />
            </div>
            <p className={styles.iconInfo}>setting & privacy</p>
          </div>

          <div className={styles.option} onClick={handleLogout}>
            <div className={styles.iconBox}>
              <IoLogOut className={styles.icon} />
            </div>
            <p className={styles.iconInfo}>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutCard;
