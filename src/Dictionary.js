import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function handleKeyword(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search..."
          autoFocus={true}
          onChange={handleKeyword}
        />
      </form>
    </div>
  );
}
