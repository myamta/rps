import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

//1.박스2개
//2.가위바위보 버튼
//3. 버튼클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에 따라 테두리 색이 바뀜(이기면 초록 지면 빨강 비기면 검정)

function App() {
  const choice = {
    rock: {
      name: "Rock",
      emoji: "✊",
    },
    scissros: {
      name: "Scissros",
      emoji: "✌🏻",
    },
    paper: {
      name: "Paper",
      emoji: "✋",
    },
  };
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    //유저가 선택한 값
    setUserSelect(choice[userChoice]);
    //컴퓨터가 선택한 값
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgment(choice[userChoice], computerChoice));
  };

  //user == computer tie(비김)
  //user == rock, computer == "scissors" user win
  //user ==rock, computer =="paper" user lose
  //user ==scissors, computer ==paper user win
  //user == scissors, computer == rock user lose
  //user ==paper, computer == rock user win
  // user ==paper, computer == scissors user lose

  const judgment = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissros" ? "win" : "lose";
    else if (user.name == "Scissros")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let ItemArray = Object.keys(choice);
    //Object.Keys = 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * ItemArray.length);
    //Math.floor <소숫점버림
    let final = ItemArray[randomItem];
    //인덱스 번호에 맞춰서 아이템 이름이 반환됨
    return choice[final];
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="btn">
        <button onClick={() => play("scissros")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
