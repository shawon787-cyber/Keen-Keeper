import { useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ users, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;