import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { logout } from "../../../network/request";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

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

  useEffect(() => {
    if (loginUser) {
      setVisibleBtn(false);
    }
  }, []);

  const onLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      logout();
      setVisibleBtn(true);
      console.log("visibleBtn logoout :>> ", visibleBtn);
    } else {
    }
  };

  const onLogin = () => {
    navigate("/login");
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
          {visibleBtn ? (
            <div className={styles.headerBtn}>
              <Paper>
                <p className={styles.linkLogin} onClick={onLogin}>
                  로그인
                </p>
                <div className={styles.linkLoginBox}>
                  <MenuList>
                    <p className={styles.linkLogin} onClick={onLogin}>
                      로그인
                    </p>
                    <MenuItem>로그인</MenuItem>
                    <MenuItem>회원가입</MenuItem>
                  </MenuList>
                </div>
              </Paper>
            </div>
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
