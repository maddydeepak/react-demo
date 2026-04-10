import { useContext, useState } from "react";
import "./App.css";
import UserContext from "./UserContext";
import User from "./User";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const { user, address } = useContext(UserContext);
  const [userData, setUserData] = useState({ name: user.name });
  const [addressData, setAddressData] = useState({ place: address.place });

  return (
    <UserContext.Provider value={{ user: userData, address: addressData }}>
      <section id="center">
        <div>
          <h1>React Demo</h1>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setUserData({ name: e.target.value });
          }}
          placeholder="Enter Name Here"
        />
        <input
          type="text"
          value={addressValue}
          onChange={(e) => {
            setAddressValue(e.target.value);
            setAddressData({ place: e.target.value });
          }}
          placeholder="Enter Address Here"
        />
        <button
          className="counter"
          onClick={() => {
            setCount((count) => count + 1);
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
