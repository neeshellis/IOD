import { useState } from "react";

function Calculator() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [result, setresult] = useState();

  const addCalculator = () => {
    //const handleDeleteCat = (id) => {
    setresult(num1 + num2);
  };

  const subtractCalculator = () => {
    setresult(num1 - num2);
  };

  const multiplyCalculator = () => {
    setresult(num1 * num2);
  };

  const divideCalculator = () => {
    setresult(num1 / num2);
  };

  const handleResetCalculator = () => {
 setnum1(0);
 setnum2(0);
 setresult(0);
};

  // function subtract() {
  //   num1 = Number(document.getElementById("num1").value);
  //   num2 = Number(document.getElementById("num2").value);
  //   result = num1 - num2;
  //   console.log(result);
  //   document.getElementById("result").textContent = result;
  // }

  // function divide() {
  //   num1 = Number(document.getElementById("num1").value);
  //   num2 = Number(document.getElementById("num2").value);
  //   result = num1 / num2;
  //   console.log(result);
  //   document.getElementById("result").textContent = result;
  // }

  // function multiply() {
  //   num1 = Number(document.getElementById("num1").value);
  //   num2 = Number(document.getElementById("num2").value);
  //   result = num1 * num2;
  //   console.log(result);
  //   document.getElementById("result").textContent = result;
  // }

  // reset button
  // function resetCalculator() {
  //   document.getElementById("num1").value = "";
  //   document.getElementById("num2").value = "";
  //   document.getElementById("result").value = "";

  //   num1 = 0;
  //   num2 = 0;
  //   result = 0;

  //   // add();

    return (
      <div className="Calculator componentBox">
        <h1>Calculator</h1>
        <label>
          Num 1:
          <input
            name="Number 1"
            value={num1}
            type="number"
            onChange={(e) => setnum1(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Num 2:
          <input
            name="Number 2"
            value={num2}
            type="number"
            onChange={(e) => setnum2(Number(e.target.value))}
          />
        </label>
{/* <button onClick={handleSortCats}>Sort List</button> */}
        <br />
        <br />
        <button onClick={addCalculator}>Add</button>
        <br />
        <br />
        <button onClick={subtractCalculator}>Subtract</button>
        <br />
        <br />
        <button onClick={multiplyCalculator}>Multiply</button>
        <br />
        <br />
        <button onClick={divideCalculator}>Divide</button>
        <br />
        <br />
        <div>
          Result: {result}
        </div>
        <br />
        <button onClick={handleResetCalculator}>Reset</button>
      </div>
    );
  }


export default Calculator;
