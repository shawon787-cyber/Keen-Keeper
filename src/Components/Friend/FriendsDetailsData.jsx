import { useContext, useEffect, useState } from "react";
import { IoCallOutline, IoDocumentOutline } from "react-icons/io5";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { toast } from "react-toastify";

const FriendsDetailsData = () => {
  const { id } = useParams();

  const { history, setHistory } = useContext(DataContext);

  const [friendsSingleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(true);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <IoCallOutline />;
      case "Text":
        return <IoDocumentOutline />;
      case "Video":
        return <MdOutlineCameraAlt />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch("/data.json");
        const data = await res.json();

        const found = data.find((item) => item.id === parseInt(id));

        await new Promise((resolve) => setTimeout(resolve, 800));

        setSingleData(found);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // 🔥 UPDATED ONLY (toast added, UI same)
  const handleAction = (type) => {
    const now = new Date();

    const newItem = {
      type,
      message: "Quick interaction",
      date: now.toISOString(),
      userId: id,
      userName: friendsSingleData.name,
    };

    setHistory((prev) => [newItem, ...prev]);

    // 🔥 TOAST (NO UI CHANGE)
    if (type === "Call") {
      toast.success("Call added to history!");
    } else if (type === "Text") {
      toast.info("Text added to history!");
    } else if (type === "Video") {
      toast.warning("Video added to history!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="loading loading-spinner loading-lg text-purple-500"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 my-10">

      {/* LEFT */}
      <div className="bg-white rounded-2xl shadow p-6 text-center">
        <img
          src={friendsSingleData.picture}
          alt="profile"
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />

        <h2 className="text-xl font-bold mt-3">
          {friendsSingleData.name}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {friendsSingleData.email}
        </p>

        <div className="flex justify-center">
          <p
            className={`mt-3 font-medium text-white px-3 py-1 rounded-full w-fit text-center ${
              friendsSingleData.status === "overdue"
                ? "bg-red-600"
                : friendsSingleData.status === "almost due"
                ? "bg-yellow-600"
                : "bg-green-900"
            }`}
          >
            {friendsSingleData.status}
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-3">
          {friendsSingleData.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-4">
          "{friendsSingleData.bio}"
        </p>

        <p className="text-gray-500 font-medium mt-1">
          {friendsSingleData.email}
        </p>

        <div className="mt-5 space-y-2">
          <button className="w-full py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            Snooze 2 Weeks
          </button>
          <button className="w-full py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            Archive
          </button>
          <button className="w-full py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
            Delete
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="md:col-span-2 space-y-6">

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800">
              {friendsSingleData.days_since_contact}
            </h3>
            <p className="text-gray-500 text-sm">Days Since Contact</p>
          </div>

          <div className="bg-white shadow rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800">
              {friendsSingleData.goal}
            </h3>
            <p className="text-gray-500 text-sm">Goal (Days)</p>
          </div>

          <div className="bg-white shadow rounded-xl p-8 text-center">
            <h3 className="text-lg font-bold text-green-700">
              {friendsSingleData.next_due_date}
            </h3>
            <p className="text-gray-500 text-sm">Next Due</p>
          </div>
        </div>

        {/* GOAL */}
        <div className="bg-white shadow rounded-xl p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Relationship Goal</h2>
            <button className="shadow p-3 rounded-md font-medium text-sm">
              Edit
            </button>
          </div>

          <p className="text-gray-600 mt-2">
            Connect every <b>{friendsSingleData.goal}</b> days
          </p>
        </div>

        {/* QUICK ACTION */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-lg font-bold mb-4">
            Quick Check-In
          </h2>

          <div className="grid grid-cols-3 gap-4 text-center">

            <button
              onClick={() => handleAction("Call")}
              className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 flex items-center justify-center gap-2 text-lg"
            >
              <IoCallOutline /> Call
            </button>

            <button
              onClick={() => handleAction("Text")}
              className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 flex items-center justify-center gap-2 text-lg"
            >
              <IoDocumentOutline /> Text
            </button>

            <button
              onClick={() => handleAction("Video")}
              className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 flex items-center justify-center gap-2 text-lg"
            >
              <MdOutlineCameraAlt /> Video
            </button>

          </div>
        </div>

        {/* HISTORY */}
        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-lg font-bold mb-4">
            History (Live)
          </h2>

          <div className="space-y-3">
            {history.length === 0 ? (
              <p className="text-gray-500">No history found</p>
            ) : (
              history.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between p-3 bg-gray-50 rounded-lg items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-gray-700">
                      {getIcon(item.type)}
                    </span>

                    <div>
                      <p className="font-medium">{item.type}</p>
                      <p className="text-sm text-gray-500">
                        {item.message}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendsDetailsData;