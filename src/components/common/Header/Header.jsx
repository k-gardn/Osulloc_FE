import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../network/request";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getcart } from "../../../redux/modules/cartSlice";

const Header = () => {
  // const [headerColor, setHeaderColor] = useState("original");
  const header = document.querySelector("#header");

  // document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  // });

  // if (window.screenY > 80) {
  //   setHeaderColor("dark");
  // } else {
  //   setHeaderColor("original");
  // }

  // console.log("headerColor >", headerColor);

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const getMyCartNum = useSelector((state) => state.cart.myCartNum);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [visibleBtn, setVisibleBtn] = useState(true);
  const [myCartNum, setMyCartNum] = useState(0);

  const LOGO_IMG =
    "https://www.osulloc.com/kr/ko/static_cdj/images/main/logo_white.png";

  const loginUser = localStorage.getItem("email");

  useEffect(() => {
    if (loginUser) {
      setVisibleBtn(false);
    }
  }, []);

  useEffect(() => {
    if (loginUser !== null) {
      dispatch(getcart());
    }
  }, [getMyCartNum]);

  useEffect(() => {
    setMyCartNum(getMyCartNum);
  }, [getMyCartNum]);

  const onLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      logout();
      setVisibleBtn(true);
    } else {
    }
  };

  const onLogin = () => {
    navigate("/login");
  };

  const onJoin = () => {
    navigate("/join");
  };

  const goCart = () => {
    navigate("/cart");
  };

  const goHome = () => {
    window.location.replace("/");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    //scrollPosition < 100 ? "original_header" : "change_header"
    <div>
      {/* <header className={styles.header} id="header"> */}
      <header
        className={`${styles.header} ${
          scrollPosition < 80 ? styles.original : styles.dark
        }`}
        id="header"
      >
        <img
          className={styles.logoImg}
          src={LOGO_IMG}
          alt="logo"
          onClick={goHome}
        />
        <div className={styles.navigation}>
          {visibleBtn ? (
            <div>
              <Button onClick={handleClick}>
                <span className={styles.link}>로그인 ▾</span>
              </Button>
              <span className={styles.linkJoin}>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={onLogin}>로그인</MenuItem>
                  <MenuItem onClick={onJoin}>회원가입</MenuItem>
                </Menu>
              </span>
            </div>
          ) : (
            <div className={styles.statusLogin}>
              <button className={styles.cartBtn} onClick={goCart}>
                <ShoppingCartOutlinedIcon />
              </button>
              <div className={styles.myCartNum}>
                {myCartNum === -1 ? 0 : myCartNum}
              </div>
              <p className={styles.link} onClick={onLogout}>
                로그아웃
              </p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
