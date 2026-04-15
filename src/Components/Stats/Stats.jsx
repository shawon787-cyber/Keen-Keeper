import { useContext } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { DataContext } from "../context/DataContext";
import { GoDotFill } from "react-icons/go";

const Stats = () => {
  const { history } = useContext(DataContext);

  const counts = history.reduce(
    (acc, item) => {
      if (item.type === "Call") acc.Call++;
      else if (item.type === "Text") acc.Text++;
      else if (item.type === "Video") acc.Video++;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 }
  );

  const data = [
    { name: "Call", value: counts.Call },
    { name: "Text", value: counts.Text },
    { name: "Video", value: counts.Video },
  ];

  
  const COLORS = ["#22c55e", "#3b82f6", "#a855f7"]; 
 

  return (
    <div className=" px-2 py-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">Friendship Analytics</h1>
      <div className="bg-white container mx-auto p-8 rounded-3xl shadow mb-6">
        <h1 className="text-green-800 text-xl font-medium">By Interaction Type</h1>

      <div className="flex flex-col items-center justify-center">
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
      <div className="flex items-center justify-center gap-2">
        <p className="flex items-center gap-1"><GoDotFill className="text-sky-600"></GoDotFill> Text</p>
        <p className="flex items-center gap-1"><GoDotFill className="text-green-600"></GoDotFill> Call</p>
        <p className="flex items-center gap-1"><GoDotFill className="text-purple-600"></GoDotFill> Video</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Stats;