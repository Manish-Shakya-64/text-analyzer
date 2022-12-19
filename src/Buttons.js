import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <button className=" btn btn-primary mt-2 m-3" onClick={props.upper}>
        To UpperCase
      </button>
      <button className=" btn btn-success mt-2 m-3" onClick={props.lower}>
        To LowerCase
      </button>
      <button className=" btn btn-warning mt-2 m-3" onClick={props.Check}>
        Analyze
      </button>
      <button className=" btn btn-dark mt-2 m-3" onClick={props.clear}>
        Clear
      </button>
    </div>
  );
}
