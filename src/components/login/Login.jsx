import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import styles from "./Login.module.css";
import { instance } from "../../network/request";
import { validEmail, validPw } from "../join/Join";
import { logout } from "../../network/request";

function Login() {
  const navigate = useNavigate();
  const [email, , emailHandler] = useInput();
  const [password, , pwHandler] = useInput();

  async function login(email, password) {
    try {
      const reqdata = { email, password };
      const res = await instance.post(`/api/member/login`, reqdata);
      if (res.data.success === false) {
        alert(res.data.error);
      } else {
        const accessToken = res.headers.authorization;
        const refreshToken = res.headers["refresh-token"];
        sessionStorage.setItem("Access_token", accessToken);
        sessionStorage.setItem("Refresh_token", refreshToken);
        localStorage.setItem("email", email);
        localStorage.setItem("myCartNum", res.data.myCartNum);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // DESC: 똑같은 코드를 .then을 이용한다면
  // async function login(email, password) {
  //   const reqdata = { email, password };
  //   instance
  //     .post(`/api/member/login`, reqdata)
  //     .then((res) => {
  //       if (res.data.success === false) {
  //         alert(res.data.error);
  //       } else {
  //         const accessToken = res.headers.authorization;
  //         const refreshToken = res.headers["refresh-token"];
  //         sessionStorage.setItem("Access_token", accessToken);
  //         sessionStorage.setItem("Refresh_token", refreshToken);
  //         localStorage.setItem("email", email);
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const loginHandler = () => {
    if (email === "" || password === "") {
      alert("이메일과 비밀번호를 입력하세요.");
    } else if (validEmail.test(email) && validPw.test(password)) {
      login(email, password);
    } else {
      alert("이메일이나 비밀번호가 유효한 형식이 아닙니다.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.loginbox}>
        <div className={styles.logo}>
          <img
            src={"/osulloclogo.png"}
            alt="logo"
            width="280"
            height="200"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.inputbox}>
          <input
            className={styles.input}
            placeholder="이메일을 입력하세요."
            title="email"
            value={email}
            onChange={emailHandler}
          ></input>
          <input
            className={styles.input}
            placeholder="비밀번호 입력(4~16자 영문, 숫자 조합)"
            title="password"
            type="password"
            value={password}
            onChange={pwHandler}
          ></input>
          <button className={styles.loginBtn} onClick={loginHandler}>
            로그인
          </button>
          <div className={styles.joinYet}>
            <p>아직 회원이 아니세요?</p>
            <p onClick={() => navigate("/join")} style={{ cursor: "pointer" }}>
              회원가입 ＞
            </p>
          </div>
        </div>
      </div>
      <button onClick={logout}>누르면 로그아웃이 되는 버튼</button>
    </div>
  );
}

export default Login;
