
import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoCallOutline, IoDocumentOutline } from "react-icons/io5";
import { MdOutlineCameraAlt } from "react-icons/md";
import { DataContext } from "../context/DataContext";

const Timeline = ({ historyData }) => {
  const [sortType, setSortType] = useState("new");
  const [filterType, setFilterType] = useState("All"); // ✅ new

  const { history } = useContext(DataContext);

  const rawData =
    Array.isArray(historyData) && historyData.length > 0
      ? historyData
      : history;

  const safeData = Array.isArray(rawData) ? rawData : [];

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

 
  const filteredData =
    filterType === "All"
      ? safeData
      : safeData.filter((item) => item.type === filterType);

  
  const sortedHistory = [...filteredData].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (sortType === "new") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="container mx-auto p-6 my-10 min-h-[50vh]">
      <h1 className="text-2xl font-bold mb-3">Timeline</h1>

     
      <div className="dropdown dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 flex items-center gap-2"
        >
          Filter By Time <FaAngleDown />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => setSortType("old")}>
              Oldest To Newest
            </a>
          </li>
          <li>
            <a onClick={() => setSortType("new")}>
              Newest To Oldest
            </a>
          </li>
        </ul>
      </div>

     
      <div className="dropdown dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 flex items-center gap-2"
        >
          Filter By Type <FaAngleDown />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => setFilterType("All")}>All</a>
          </li>
          <li>
            <a onClick={() => setFilterType("Call")}>Call</a>
          </li>
          <li>
            <a onClick={() => setFilterType("Text")}>Text</a>
          </li>
          <li>
            <a onClick={() => setFilterType("Video")}>Video</a>
          </li>
        </ul>
      </div>

      {safeData.length === 0 ? (
        <p className="text-gray-500 mt-4">No history found</p>
      ) : (
        <div className="space-y-4 mt-4">
          {sortedHistory.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white shadow p-5 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl text-gray-700">
                  {getIcon(item.type)}
                </div>

                <div>
                  <p className="font-medium">
                    {item.userName} - {item.type}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.message}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                {formatDate(item.date)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;