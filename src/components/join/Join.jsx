import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";
import useInput from "../../hooks/useInput";
import { instance } from "../../network/request";

// Email: '@', '.' 포함
export const validEmail =
  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
// 비밀번호: 4~16자 영문, 숫자 조합
export const validPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,16}$/;
// 이름: 2~15자 한글
export const validName = /^[가-힣]{2,15}$/;

function Join() {
  const navigate = useNavigate();
  const [username, , usernameHandler] = useInput("");
  const [subscription, setSubscription] = useState(false);
  const [email, , emailHandler] = useInput("");
  const [password, , passwordHandler] = useInput("");
  const [repw, , repwHandler] = useInput("");

  const subscribeHandler = (e) => {
    setSubscription(e.target.checked);
  };

  async function join(email, password, username, subscription) {
    try {
      const res = await instance.post(`/api/member/signup`, {
        email,
        password,
        username,
        subscription,
      });
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.joinbox}>
        <div className={styles.halfjoinbox}>
          <div className={styles.leftjoinbox}>
            <img src={"/osulloclogoedit.png"} alt="logo" width="260" height="250" />
          </div>
          <div className={styles.rightjoinbox}>
            <p className={styles.content}>오설록에 오신 것을 환영합니다</p>
            <div className={styles.inputbox}>
              <input
                className={styles.input}
                placeholder="이름"
                title="username"
                value={username}
                onChange={usernameHandler}
                style={{ width: "160px", marginRight: "20px" }}
              ></input>
              <label className={styles.label}>
                <input
                  title="subscribe"
                  type="checkbox"
                  value={subscription}
                  onChange={subscribeHandler}
                  style={{ margin: "3px 9px 3px 4px" }}
                />
                다다일상 구독하기
              </label>
              <input
                className={styles.input}
                placeholder="이메일"
                title="email"
                value={email}
                onChange={emailHandler}
              ></input>
              <input
                className={styles.input}
                placeholder="비밀번호(4~16자 영문, 숫자 조합)"
                title="password"
                type="password"
                value={password}
                onChange={passwordHandler}
              ></input>
              <input
                className={styles.input}
                placeholder="비밀번호(4~16자 영문, 숫자 조합)"
                title="repassword"
                type="password"
                value={repw}
                onChange={repwHandler}
              ></input>
              <button
                className={styles.joinBtn}
                onClick={() => join(email, password, username, subscription)}
                disabled={
                  password !== repw ||
                  !validName.test(username) ||
                  !validEmail.test(email) ||
                  !validPw.test(password) ||
                  !validPw.test(repw)
                }
              >
                회원가입
              </button>
            </div>
            <div className={styles.joinalready}>
              <div>이미 회원이신가요?</div>
              <div onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
                로그인 ＞
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
