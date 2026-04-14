import { useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [friendsData, setFriendsData] = useState([]);

  // 🔥 NEW: timeline history state
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFriendsData(data);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        users,
        friendsData,

        history,
        setHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;