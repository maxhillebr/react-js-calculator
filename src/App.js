import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [resultValue, setResultValue] = useState("0");

  const addValueToResult = (value) => {
    if (value === "AC") {
      setResultValue("");
    } else if (value === "DEL") {
      setResultValue(resultValue.slice(0, -1));
    } else if (value === "=") {
      calculateSum();
    } else {
      setResultValue(resultValue + value);
    }
  };

  const calculateSum = () => {
    try {
      const calculatedSum = new Function(`return ${resultValue}`)();
      setResultValue(calculatedSum.toString());
    } catch (error) {
      setResultValue("Error");
    }
  };

  return (
    <div className="wrapper">
      <div className="calc-grid">
        <div className="result">{resultValue}</div>
        <div className="calc-buttons">
          <button onClick={() => addValueToResult("AC")} className="div1">
            AC
          </button>
          <button onClick={() => addValueToResult("DEL")} className="div2">
            DEL
          </button>
          <button onClick={() => addValueToResult("/")} className="div3">
            /
          </button>
          <button onClick={() => addValueToResult("1")} className="div4">
            1
          </button>
          <button onClick={() => addValueToResult("2")} className="div5">
            2
          </button>
          <button onClick={() => addValueToResult("3")} className="div6">
            3
          </button>
          <button onClick={() => addValueToResult("*")} className="div7">
            *
          </button>
          <button onClick={() => addValueToResult("4")} className="div8">
            4
          </button>
          <button onClick={() => addValueToResult("5")} className="div9">
            5
          </button>
          <button onClick={() => addValueToResult("6")} className="div10">
            6
          </button>
          <button onClick={() => addValueToResult("+")} className="div11">
            +
          </button>
          <button onClick={() => addValueToResult("7")} className="div12">
            7
          </button>
          <button onClick={() => addValueToResult("8")} className="div13">
            8
          </button>
          <button onClick={() => addValueToResult("9")} className="div14">
            9
          </button>
          <button onClick={() => addValueToResult("-")} className="div15">
            -
          </button>
          <button onClick={() => addValueToResult(".")} className="div16">
            .
          </button>
          <button onClick={() => addValueToResult("0")} className="div17">
            0
          </button>
          <button onClick={() => addValueToResult("=")} className="div18">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
