import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Join.module.css";

function Join() {
  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      <div className={styles.joinbox}>
        <div className={styles.halfjoinbox}>
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
                title="password"
                // value={pw}
                // onChange={pwHandler}
                style={{ width: "160px", marginRight: "21px" }}
              ></input>
              <label className={styles.label}>
                <input
                  title="password"
                  type="checkbox"
                  style={{ margin: "3px 9px 3px 4px" }}
                />
                다다일상 구독하기
              </label>
              <input
                className={styles.input}
                placeholder="이메일을 입력하세요."
                title="email"
                // value={email}
                // onChange={emailHandler}
              ></input>
              <input
                className={styles.input}
                placeholder="비밀번호 입력(영문, 숫자, 특수문자 조합)"
                title="password"
                type="password"
                // value={pw}
                // onChange={pwHandler}
              ></input>
              <input
                className={styles.input}
                placeholder="비밀번호 확인(영문, 숫자, 특수문자 조합)"
                title="password"
                type="password"
                // value={pw}
                // onChange={pwHandler}
              ></input>
              <button className={styles.joinBtn}>회원가입</button>
            </div>
          </div>
          <div className={styles.rightjoinbox}>
            <img
              src={"/osullocblacklogo.jpeg"}
              alt="logo"
              width="350"
              height="350"
              style={{ paddingTop: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
