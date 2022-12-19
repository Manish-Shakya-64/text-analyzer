import React, { useState } from "react";
import Buttons from "../Buttons";

export default function TextareaForm(props) {
  const [text, setText] = useState("");//state for handling user input
  let [totalchar, setTotalchar] = useState(0);//state for handling  number of character in input
  let [vw, setVowels] = useState(0);//state for handling number of vowels in input
  let [dig, setDigits] = useState(0);//state for handling number of digits in input
  let [spc, setSpaces] = useState(0);//state for handling number of spces in input
  let [spchar, setSpchar] = useState(0);//state for handling number of special character in input

  //function for storing input values in text variable
  const onChangeHandler = (event) => {
    console.log("onchange event handler is inoked");
    setText(event.target.value);
  };

  //function for changing text into uppercase
  const upperCaseHandler = () => {
    console.log("Uppercase button clicked");
    setText(text.toUpperCase());
  };

//function for changing text into lowercase
  const lowerCaseHandler = () => {
    console.log("Lowercase button clicked");
    setText(text.toLowerCase());
  };


//function for clearing texearea and shown data
  const ClearText = () => {
    console.log("Clear button clicked");
    setText("");
    setVowels(0);
    setDigits(0);
    setSpaces(0);
    setSpchar(0);
    setTotalchar(0);
  };

 //function for analyzing text that performs finding vowels, digits, spaces, special characters,totalcharacters
  const TextAnalyze = () => {
    console.log("Text analyze button clicked");
    //creating array of strig from user input to check each character
    let userInput = Array.from(text.toLowerCase());

    for (let i = 0; i < userInput.length; i++) {
      //aaray of special character  
      let format = new Array();
      format = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "=",
        "+",
        "<",
        ">",
        ".",
        ",",
        "/",
        "?",
        ":",
        ";",
        "[",
        "]",
        "{",
        "}",
        "|",
      ];

      //condition to check vowels
      if (
        userInput[i] === "a" ||
        userInput[i] === "e" ||
        userInput[i] === "i" ||
        userInput[i] === "o" ||
        userInput[i] === "u"
      ) {
        vw = vw + 1;
        setVowels(vw);
      }

      //conditon for checking digits
      if (userInput[i] >= 0 && userInput[i] <= 9 && userInput[i] !== " ") {
        dig = dig + 1;
        setDigits(dig);
      }

      //condition for checking spaces
      if (userInput[i] === " ") {
        spc = spc + 1;
        setSpaces(spc);
      }

      //condition for checking special character
      for (let j = 0; j < format.length; j++) {
        if (userInput[i] === format[j] && userInput[i] !== " ") {
          spchar = spchar + 1;
          setSpchar(spchar);
        }
      }
    }
    // let len = userInput.length();
    // totalchar = len - spc - spchar - dig;
    setTotalchar(userInput.length-spc-spchar-dig);
  };

  return (
    <div className="container my-5">
      <h3>{props.title}</h3>
      <textarea
        className="form-control "
        id="floatingTextarea"
        rows="8"
        value={text}
        onChange={onChangeHandler}
        autoFocus
      ></textarea>
      <Buttons Check={TextAnalyze} upper={upperCaseHandler} lower={lowerCaseHandler} clear={ClearText} />
      <div className="container">
        <h5>Total Characters : {totalchar}</h5>
        <h5>Vowels : {vw}</h5>
        <h5>Digits : {dig}</h5>
        <h5>Special Characters : {spchar}</h5>
        <h5>Spaces : {spc}</h5>
      </div>
    </div>
  );
}
