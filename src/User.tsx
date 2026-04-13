import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./nameSlice";

const User = () => {
  const { user } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const userList = useSelector((store) => store.name.usersList);
  const dispatch = useDispatch();

  const nameStoreHandler = () => {
    if (inputValue.trim() !== "" && userList.indexOf(inputValue) === -1) {
      dispatch(updateName(inputValue));
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Enter Name Here"
      />
      <h1>{user.name}</h1>
      <button className="counter" onClick={nameStoreHandler}>
        Update Store !
      </button>
      <ul>
        {userList.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
