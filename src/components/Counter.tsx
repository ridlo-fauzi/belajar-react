import { useState } from "react";

const Counter = () => {
  const [input, setInput] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "5px 20px",
          marginRight: "10px",
          fontSize: "20px",
          backgroundColor: "lightblue",
        }}
        onClick={() => setInput(input + 1)}
      >
        +
      </button>
      <div>{input}</div>
      <button
        style={{
          padding: "5px 20px",
          marginLeft: "10px",
          fontSize: "20px",
          backgroundColor: "lightcoral",
        }}
        onClick={() => setInput(input - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
