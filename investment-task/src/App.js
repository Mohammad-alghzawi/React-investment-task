import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100,
    annualInvestment: 50,
    expectedReturn: 50,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function userHandle(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div>
      <Header />
      <UserInput newUserInput={userInput} onChange={userHandle} />
    {!inputIsValid && <p className="error-message">Please enter a duration greater than zero.</p>}
     {inputIsValid && <Results input={userInput} />} 
    </div>
  );
}

export default App;
