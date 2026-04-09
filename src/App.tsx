import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useFetchAsyncAwait, useFetchPromise, useFetchIIFE } from "./useFetch";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const data = useFetchPromise();
  const filteredData = data && data.filter((val) => val.id === 1);

  const data2 = useFetchAsyncAwait();
  const filteredData2 = data2 && data2.filter((val) => val.id === 1);

  const data3 = useFetchIIFE();
  const filteredData3 = data3 && data3.filter((val) => val.id === 1);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>React Demo</h1>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <div>
          {filteredData &&
            filteredData.map((val) => <li key={val.userId}>{val.title}</li>)}
        </div>
        <div>
          {filteredData2 &&
            filteredData2.map((val) => <li key={val.userId}>{val.title}</li>)}
        </div>
        <div>
          {filteredData3 &&
            filteredData3.map((val) => <li key={val.id}>{val.name}</li>)}
        </div>
      </section>
    </>
  );
}

export default App;
