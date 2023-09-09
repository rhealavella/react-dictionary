import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleResponseImages(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let imagesKey = "e9ebt40ac8468b03ff07a7b93c22oc3b";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesKey}`;

    axios.get(imagesApiUrl).then(handleResponseImages);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4>What word do you want to look up?</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search..."
              autoFocus={true}
              defaultValue={props.defaultKeyword}
              onChange={handleKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunrise, peace, book, test etc.
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
