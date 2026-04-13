import { useContext, useState } from "react";
import "./App.css";
import UserContext from "./UserContext";
import User from "./User";
import Address from "./Address";
import APICalls from "./APICalls";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [count, setCount] = useState(0);
  const [addressValue, setAddressValue] = useState("");
  const { user, address } = useContext(UserContext);
  const [userData, setUserData] = useState({ name: user.name });
  const [addressData, setAddressData] = useState({ place: address.place });

  return (
    <Provider store={store}>
      {/* <UserContext.Provider value={{ user: userData, address: addressData }}> */}
      <section id="center">
        <div>
          <h1>React Demo</h1>
        </div>
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
        <Address />
        <APICalls />
      </section>
      {/* </UserContext.Provider> */}
    </Provider>
  );
}

export default App;
