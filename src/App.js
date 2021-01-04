import React, { useState } from "react";
import { data } from "./data";
//import Button from "@material-ui/core/Button";

import "./App.css";
import { CardComponent } from "./Components/CardComponent";

function App() {
  const [count, setCount] = useState(0);
  const [subData, setSubData] = useState([]);

  function previousHandler() {
    let preCount = count;
    console.log("current count from prev - ", count);
    if (count - 10 >= 0) {
      setCount(count - 10);
      let newAry = data.slice(count - 20, preCount - 10);
      setSubData(newAry);
      console.log(newAry);
    }
  }

  function nextHandler() {
    let preCount = count;
    if (count + 10 > 0 && count < 100) {
      setCount(count + 10);
      let newAry = data.slice(preCount, count + 10);
      setSubData(newAry);
      console.log(newAry);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="btnClick">
          <button onClick={() => previousHandler()}>Prev</button>
          <button onClick={() => nextHandler()}>Next</button>
        </div>

        {subData.map((each) => {
          return <CardComponent key={each.id} each={each} />;
        })}
      </div>
    </div>
  );
}

export default App;
