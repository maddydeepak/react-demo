import { useEffect, useState } from "react";

export const useFetchPromise = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((reject) => console.error(reject));
  }, []);
  return data;
};

export const useFetchAsyncAwait = () => {
  const [data2, setData2] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setData2(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);
  return data2;
};

export const useFetchIIFE = () => {
  const [data3, setData3] = useState(null);
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data3 = await resp.json();
      setData3(data3);
    })();
  }, []);
  return data3;
};
