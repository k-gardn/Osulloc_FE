import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";

const Header = () => {
  // const user = useSelector((store) => store.auth.user);
  const nickname = localStorage.getItem("nickname");
  // const [username, setUsername] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LOGO_IMG =
    "https://www.osulloc.com/kr/ko/static_cdj/images/main/logo_white.png";

  // TODO: login 여부 확인
  // useEffect(() => {
  //   if (user) {
  //     const { isAuthenticated, nickname } = user;
  //     if (isAuthenticated) {
  //       setUsername(nickname);
  //     } else {
  //       setUsername("");
  //     }
  //   } else if (nickname !== "") {
  //     setUsername(nickname);
  //   }
  // }, [user]);

  // TODO: 로그인 유저 정보 가져오기 (일단 지금은 로그인 상태로 확인하기)
  const loginUser = "leeseul";

  // TODO: logout 함수
  const logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      navigate("/");
      // dispatch(logOut());
    } else {
    }
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
          {loginUser ? (
            <Link className={styles.link} to="/login">
              로그인
            </Link>
          ) : (
            <p className={styles.link} onClick={logout}>
              로그아웃
            </p>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
