import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail, emailHandler] = useInput();
  const [pw, setPw, pwHandler] = useInput();

  // 이메일 검사: '@', '.' 이 둘다 포함될것.
  const isValidEmail = email.includes("@") && email.includes(".");
  // 비밀번호 특수문자 검사를 위한 정규식표현.
  const specialLetter = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  // 특수문자 1자 이상, 전체 8자 이상일것.
  const isValidPw = pw.length >= 8 && specialLetter >= 1;

  console.log(document.cookie);

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
            placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)"
            title="password"
            type="password"
            value={pw}
            onChange={pwHandler}
          ></input>
          <button className={styles.loginBtn}>로그인</button>
          <div className={styles.joinYet}>
            <div>아직 회원이 아니세요?</div>
            <div onClick={() => navigate("/join")} style={{ cursor: "pointer" }}>
              회원가입 ＞
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
