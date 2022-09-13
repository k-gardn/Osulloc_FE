import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { logout } from "../../../network/request";

const Header = () => {
  // const user = useSelector((store) => store.auth.user);
  const nickname = localStorage.getItem("nickname");
  // const [username, setUsername] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [visibleBtn, setVisibleBtn] = useState(true);

  const LOGO_IMG =
    "https://www.osulloc.com/kr/ko/static_cdj/images/main/logo_white.png";

  const loginUser = localStorage.getItem("email");

  // TODO: logout 함수
  const onLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      logout();
      // setVisibleBtn(!visibleBtn);
    } else {
    }
  };

  const onLogin = () => {
    navigate("/login");
    // setVisibleBtn(false);
  };

  const goCart = () => {
    navigate("/cart");
  };

  const goHome = () => {
    window.location.replace("/");
  };

  return (
    <div>
      <header className={styles.header}>
        <img
          className={styles.logoImg}
          src={LOGO_IMG}
          alt="logo"
          onClick={goHome}
        />
        <div className={styles.navigation}>
          <button className={styles.cartBtn} onClick={goCart}>
            <ShoppingCartOutlinedIcon />
          </button>
          {!loginUser ? (
            <p className={styles.link} onClick={onLogin}>
              로그인
            </p>
          ) : (
            <p className={styles.link} onClick={onLogout}>
              로그아웃
            </p>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
