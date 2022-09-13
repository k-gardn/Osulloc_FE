import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { logout } from "../../../network/request";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  // const user = useSelector((store) => store.auth.user);
  // const [username, setUsername] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [visibleBtn, setVisibleBtn] = useState(true);
  // const [myCartNum, setMyCartNum] = useState(0);

  const LOGO_IMG =
    "https://www.osulloc.com/kr/ko/static_cdj/images/main/logo_white.png";

  const loginUser = localStorage.getItem("email");
  const myCartNum = localStorage.getItem("myCartNum");

  // if (getMyCartNum === -1) {
  //   setMyCartNum(3);
  // }

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
          <div className={styles.myCartNum}>
            {myCartNum === -1 ? 0 : myCartNum}
          </div>
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
