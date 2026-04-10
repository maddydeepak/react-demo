import { useContext, useState } from "react";
import "./App.css";
import UserContext from "./UserContext";
import User from "./User";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState({ name: user.name });

  return (
    <UserContext.Provider value={{ user: userData }}>
      <section id="center">
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
          onClick={() => {
            setCount((count) => count + 1);
            setUserData({ name: inputValue });
          }}
        >
          Count is {count}
        </button>
        <User />
      </section>
    </UserContext.Provider>
  );
}

export default App;
