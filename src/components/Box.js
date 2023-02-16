import React from "react";

const Box = (props) => {
  let result;
  //삼항연산자
  //props로 전달된 결과값이 비겼는지 && props에 result값이 있는지 확인
  //!== 불일치 연산자로 자료형 변환 없이 두 피연산자가 엄격히 같은지 판별, 두 피연산자가 같지 않거나 ,같은 자료형이 아닐때 true 반환
  if (
    props.title === "computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  if (props.title === "computer") {
    console.log(result);
  }

  return (
    <div className={`box ${result}`}>
        {/* ${} < Expression interpolation ES6문법으로 
        result의 값을 가져와야하는데 result가 변수이기때문에 ${}로 사용
        풀이 : box.win, box.lose, box.tie이런식
        */}
      <h1>{props.title}</h1>
      <p>{props.item && props.item.emoji}</p>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
