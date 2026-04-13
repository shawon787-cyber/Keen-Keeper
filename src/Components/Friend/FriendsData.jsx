const FriendsData = ({ user }) => {
  return (
    <div>
      <div className="shadow p-8 rounded-2xl mb-2 bg-white text-center flex flex-col justify-center items-center space-y-2">
        <img src={user.picture} alt="" className="w-16 h-16 rounded-full" />

        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-xs">
            {user.days_since_contact}d ago
          </p>

          <div className="flex gap-2 justify-center mt-2">
            {user.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p
  className={`mt-3 font-medium text-white px-2 py-1 rounded-full ${
    user.status === "overdue"
      ? "bg-red-600 "
      : user.status === "almost due"
      ? "bg-yellow-600"
      : "bg-green-900"
  }`}
>
  {user.status}
</p>
        </div>
      </div>
    </div>
  );
};

export default FriendsData;