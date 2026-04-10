import { useContext } from "react";
import UserContext from "./UserContext";

const User = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};

export default User;
