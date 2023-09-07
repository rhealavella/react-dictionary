import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <ul>
        {props.example.map(function (example, index) {
          return <li key={index}>{example}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
