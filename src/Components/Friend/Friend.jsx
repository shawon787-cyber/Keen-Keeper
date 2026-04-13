import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import FriendsData from "./FriendsData";

const Friend = () => {
  const { users, loading } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;

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