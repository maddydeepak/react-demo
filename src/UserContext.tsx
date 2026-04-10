import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Deepak",
  },
  address : {
    place: "BLR"
  }
});

export default UserContext;
