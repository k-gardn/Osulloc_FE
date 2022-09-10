import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";
import useInput from "../../hooks/useInput";
import TextField from "@mui/material/TextField";

function Join() {
  const navigate = useNavigate();
  const [name, setName, nameHandler] = useInput("");
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail, emailHandler] = useInput("");
  const [pw, setPw, pwHandler] = useInput("");
  const [repw, setRepw, repwHandler] = useInput("");

  const subscribeHandler = (e) => {
    setSubscribe(e.target.checked);
  };

  return (
    <div className={styles.background}>
      <div className={styles.joinbox}>
        <div className={styles.halfjoinbox}>
          <div className={styles.rightjoinbox}>
            {/* <TextField id="outlined-basic" label="E-mail" variant="outlined" /> */}
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <img
              src={"/osullocblacklogo.jpeg"}
              alt="blacklogo"
              width="350"
              height="350"
              style={{ paddingTop: "125px" }}
            />
          </div>
          <div className={styles.leftjoinbox}>
            <p className={styles.content}>오설록에 오신 것을 환영합니다</p>
            <div className={styles.joinalready}>
              <div>이미 회원이신가요?</div>
              <div onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
                로그인 ＞
              </div>
            </div>
            <div className={styles.inputbox}>
              <input
                className={styles.input}
                placeholder="이름을 입력하세요."
                title="name"
                value={name}
                onChange={nameHandler}
                style={{ width: "160px", marginRight: "21px" }}
              ></input>
              <label className={styles.label}>
                <input
                  title="subscribe"
                  type="checkbox"
                  value={subscribe}
                  onChange={subscribeHandler}
                  style={{ margin: "3px 9px 3px 4px" }}
                />
                다다일상 구독하기
              </label>
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
              <input
                className={styles.input}
                placeholder="비밀번호 확인(영문, 숫자, 특수문자 조합)"
                title="repassword"
                type="password"
                value={repw}
                onChange={repwHandler}
              ></input>
              <button className={styles.joinBtn}>회원가입</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
