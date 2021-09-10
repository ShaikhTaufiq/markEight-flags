import React, { useState } from "react";
import "./styles.css";

const flagDictionary = {
  "🇧🇷": "Brazil",
  "🇨🇦": "Canada",
  "🇨🇳": "China",
  "🇪🇸": "Spain",
  "🇫🇷": "France",
  "🇮🇳": "India",
  "🇺🇸": "United States"
};

const flags = Object.keys(flagDictionary);

export default function App() {
  var [flag, setFlag] = useState("");
  var [country, setCountry] = useState("country will appear here");

  function changeHandler(event) {
    var flag = event.target.value;
    setFlag(flag);
    if (flag in flagDictionary) {
      setCountry(flagDictionary[flag]);
    } else {
      setCountry("Cannot find in our database!!");
    }
  }

  function flagClickHandler(flag) {
    setCountry(flagDictionary[flag]);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "2.5rem" }}>flaggie</h1>
      <input
        onChange={changeHandler}
        value={flag}
        placeholder={"search your flag here"}
      ></input>
      <div
        style={{
          padding: "1em"
        }}
      >
        {" "}
        {flag}{" "}
      </div>
      <div style={{ fontSize: "1.2rem" }}>{country}</div>
      {flags.map((flag) => (
        <span
          onClick={() => flagClickHandler(flag)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer"
          }}
          key={flag}
        >
          {" "}
          {flag}{" "}
        </span>
      ))}
    </div>
  );
}
