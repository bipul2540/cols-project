import React from "react";
import Logo from "../../components/Logo";
import styles from "./../../style/NavbarHome.module.scss";
import image from "./../../assets/logo-name.svg";
import { FiSearch } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Avatar from "react-avatar";
import LogoutCard from "./LogoutCard";
import { useState } from "react";
import { useUser } from "../../utils/useUser";
import SearchItems from "../../components/Home components/SearchItems";

const NavbarHome = () => {
  const [isLogoutCardActive, setIsLogoutCardActive] = useState(false);
  const [isInputEntered, setIsInputEntered] = useState(false);

  const handleProfilClick = () => {
    setIsLogoutCardActive(!isLogoutCardActive);
  };

  const handleInput = () => {
    setIsInputEntered(!isInputEntered);
  };

  const user = useUser();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img src={image} alt='' className={styles.logoName} />

        <div className={styles.searchbar}>
          <FiSearch className={styles.search__icon} />
          <input
            type='text'
            className={styles.search__input}
            onFocus={handleInput}
          />
          {isInputEntered && <SearchItems />}
        </div>

        <div className={styles.iconOptions}>
          <div className={styles.messageIcon}>
            <FaFacebookMessenger className={styles.icon} />
          </div>

          <div className={styles.notificationIcon}>
            <MdNotifications className={styles.icon} />
            <span className={styles.notificationCount}>1</span>
          </div>

          <div className={styles.profileIcon} onClick={handleProfilClick}>
            <Avatar
              name={user ? user.name : ""}
              size='30'
              textSizeRatio={1.75}
              round
              color='#32bea6'
            />
            <RiArrowDropDownLine className={styles.drop} />
          </div>
          {isLogoutCardActive ? <LogoutCard /> : ""}
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
