import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <a className="btn btn-light" href={props.phonetic.audio} target="blank">
        LISTEN
      </a>
    </div>
  );
}
