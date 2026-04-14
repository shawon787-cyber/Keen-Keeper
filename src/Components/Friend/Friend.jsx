import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import FriendsData from "./FriendsData";

const Friend = () => {
  const { users } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [users]);
if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="loading loading-spinner loading-lg text-purple-500"></span>
      </div>
    );
  }
  return (
    <div className="bg-gray-50 py-8">

      <div className="px-2 container mx-auto">
        <h3 className="text-3xl font-bold my-4 text-gray-800">Your Friends</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {users.map((user) => (
        <FriendsData key={user.id} user={user} />
      ))}
      </div>
      </div>
    </div>
  );
};

export default Friend;