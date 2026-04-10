import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Deepak",
  },
});

export default UserContext;
