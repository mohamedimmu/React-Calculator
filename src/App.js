import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import comma from "./utils/comma";

function App() {

  const [value, setValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  

  const operatorHandle = () => {
    if (operator === "+") {
      setPreviousValue((previousValue + parseFloat(value)));
    } else if (operator === "-") {
      setPreviousValue((previousValue - parseFloat(value)));
    } else if (operator === "÷") {
      setPreviousValue((previousValue / parseFloat(value)));
    } else if (operator === "x") {
      setPreviousValue((previousValue * parseFloat(value)));
    }
  }

  const handleButtonPress = (buttonValue) => () => {
    const num = parseFloat(value);

    if (buttonValue === "C") {
      setValue("0");
      setPreviousValue(null);
      console.log("coming");
      return;
    }

    if (buttonValue === "±") {
      setValue((num * -1).toString());
      console.log("coming");
      return;
    }

    if (buttonValue === "%") {
      setValue((num / 100).toString());
      return;
    }

    if(buttonValue === "."){
      if(value.includes('.')) return;
      setValue(value + ".");
      return;
    }

    if (buttonValue === "+") {
      if(operator !== null){
        operatorHandle();
      }else{
        setPreviousValue(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }

    if (buttonValue === "-") {
      if(operator !== null){
        operatorHandle();
      }else{
        setPreviousValue(parseFloat(value));
      }
      setValue("0");
      setOperator("-");
      return;
    }

    if (buttonValue === "x") {
      if(operator !== null){
        operatorHandle();
      }else{
        setPreviousValue(parseFloat(value));
      }
      
      setValue("0");
      setOperator("x");
      return;
    }

    if (buttonValue === "÷") {
      if(operator !== null){
        operatorHandle();
      }
      else{
        setPreviousValue(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (buttonValue === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((previousValue + parseFloat(value)).toString());
      } else if (operator === "-") {
        setValue((previousValue - parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((previousValue / parseFloat(value)).toString());
      } else if (operator === "x") {
        setValue((previousValue * parseFloat(value)).toString());
      }
      setPreviousValue(null);
      setOperator(null);
      console.log("hee");
      return;
    }


    if(value[value.length-1] === "."){
      setValue(value + buttonValue);
    }else{
    value === "0"
    ? setValue(buttonValue)
    : setValue(parseFloat(value + buttonValue).toString());
    }

  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="top"></div>
        <div className="display">{comma(value)}</div>
        <div className="buttons">
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="C"
            buttonType="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="±"
            buttonType="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="%"
            buttonType="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="÷"
            buttonType="operator"
          />
          <Button onButtonClick={handleButtonPress} buttonValue="7" onKeyPressed={handleButtonPress}/>
          <Button onButtonClick={handleButtonPress} buttonValue="8" />
          <Button onButtonClick={handleButtonPress} buttonValue="9" />
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="x"
            buttonType="operator"
          />
          <Button onButtonClick={handleButtonPress} buttonValue="4" />
          <Button onButtonClick={handleButtonPress} buttonValue="5" />
          <Button onButtonClick={handleButtonPress} buttonValue="6" />
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="-"
            buttonType="operator"
          />
          <Button onButtonClick={handleButtonPress} buttonValue="1" />
          <Button onButtonClick={handleButtonPress} buttonValue="2" />
          <Button onButtonClick={handleButtonPress} buttonValue="3" />
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="+"
            buttonType="operator"
          />
          <Button onButtonClick={handleButtonPress} buttonValue="0" />
          <Button onButtonClick={handleButtonPress} buttonValue="." />
          <Button
            onButtonClick={handleButtonPress}
            buttonValue="="
            buttonType="operator"
            isSpan
          />
        </div>
      </div>
    </div>
  );
}

export default App;
