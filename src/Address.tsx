import { useContext } from "react";
import UserContext from "./UserContext";

const Address = () => {
  const { address } = useContext(UserContext);
  return <h2>{address.place}</h2>;
};

export default Address;
