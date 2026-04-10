import { useContext } from "react";
import UserContext from "./UserContext";
import { useFetchPromise, useFetchAsyncAwait, useFetchIIFE } from "./useFetch";

const User = () => {
  const { user } = useContext(UserContext);

  const data = useFetchPromise();
  const filteredData = data && data.filter((val) => val.id === 1);

  const data2 = useFetchAsyncAwait();
  const filteredData2 = data2 && data2.filter((val) => val.id === 1);

  const data3 = useFetchIIFE();
  const filteredData3 = data3 && data3.filter((val) => val.id === 1);

  return (
    <>
      <h1>{user.name}</h1>
      <div>
        {filteredData &&
          filteredData.map((val) => <li key={Number(val.id)}>{val.title}</li>)}
      </div>
      <div>
        {filteredData2 &&
          filteredData2.map((val) => <li key={Number(val.id)}>{val.title}</li>)}
      </div>
      <div>
        {filteredData3 &&
          filteredData3.map((val) => <li key={Number(val.id)}>{val.title}</li>)}
      </div>
    </>
  );
};

export default User;
