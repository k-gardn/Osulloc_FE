import React from "react";

export const moneyForm = (num) => {
  let result = "";
  if (!isNaN(num)) {
    result = `${num.toLocaleString("ko-KR")}원`;
  } else {
    console.log(`${num} 은 숫자가 아닙니다.`);
  }
  return result;
};
