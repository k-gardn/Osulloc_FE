import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import styles from "./Login.module.css";
import { useCookies } from "react-cookie";
import { instance } from "../../network/request";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail, emailHandler] = useInput();
  const [pw, setPw, pwHandler] = useInput();
  const [cookies, setCookie, removeCookie] = useCookies();

  // 이메일: '@', '.'을 포함
  const validEmail =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  // 비밀번호: 4~16자 영문, 숫자 조합
  const validPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,16}$/;
  console.log(validEmail.test(email));

  async function login() {
    try {
      const res = await instance.post(`/api/member/login`, {
        email,
        pw,
      });
      const data = res.data;
      console.log(data);
      localStorage.setItem(email, email);
    } catch (error) {
      console.log(error);
    }
  }

  const loginHandler = () => {
    if (email === "" || pw === "") {
      alert("이메일과 비밀번호를 입력하세요.");
    } else if (validEmail.test(email) && validPw.test(pw)) {
      login();
    } else {
      alert("이메일이나 비밀번호가 유효한 형식이 아닙니다.");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.loginbox}>
        <div className={styles.logo}>
          <img src={"/osulloclogo.png"} alt="logo" width="280" height="200" />
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
            value={pw}
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
