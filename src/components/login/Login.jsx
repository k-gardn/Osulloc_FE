import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import styles from "./Login.module.css";
import { useCookies } from "react-cookie";
import { instance } from "../../network/request";
import axios from "axios";
import { validEmail, validPw } from "../join/Join";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail, emailHandler] = useInput();
  const [password, setPassword, pwHandler] = useInput();
  const [cookies, setCookie, removeCookie] = useCookies();

  async function login(email, password) {
    try {
      const reqdata = { email, password };
      console.log(reqdata);
      const res = await instance.post(`/api/member/login`, reqdata);
      console.log(res);
      const accessToken = res.headers.authorization;
      const refreshToken = res.headers["refresh-token"];
      sessionStorage.setItem("Access_token", accessToken);
      sessionStorage.setItem("Refresh_token", refreshToken);
      localStorage.setItem(email, email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  // //API 요청 파일 분리 시도해보자
  // async function login(email, password) {
  //   const reqdata = { email, password };
  //   instance
  //     .post(`/api/member/login`, reqdata)
  //     .then((res) => {
  //       const { accessToken } = res.data;
  //       // 이부분 인터셉터로 도전해보자
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  //       localStorage.setItem(email, email);
  //       console.log("성공:", res.headers);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  //API 요청 파일 분리 시도해보자
  async function login(email, password) {
    const reqdata = { email, password };
    instance
      .post(`/api/member/login`, reqdata)
      .then((res) => {
        const accessToken = res.headers.authorization;
        const refreshToken = res.headers["refresh-token"];
        // 이부분 인터셉터로 도전해보자
        sessionStorage.setItem("Access_token", accessToken);
        sessionStorage.setItem("Refresh_token", refreshToken);
        // axios.defaults.headers.common["Authorization"] = `${accessToken}`;
        // axios.defaults.headers.common["Refresh-token"] = `${refreshToken}`;
        localStorage.setItem("email", email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
    </div>
  );
}

export default Login;
