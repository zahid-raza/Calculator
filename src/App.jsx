import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCAlVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCAlVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCAlVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCAlVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
