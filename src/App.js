import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Dictionary</h1>
        <Dictionary />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          className="link"
          href="https://lighthearted-jalebi-377ddd.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Rhea La Vella
        </a>{" "}
        and is{" "}
        <a
          className="link"
          href="https://github.com/rhealavella/react-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          open-source
        </a>
        .{" "}
      </footer>
    </div>
  );
}

export default App;
