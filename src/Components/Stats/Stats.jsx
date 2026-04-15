import { useContext } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { DataContext } from "../context/DataContext";

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
    <div className="flex flex-col items-center justify-center my-10">
      <h1 className="text-2xl font-bold mb-6">Stats Overview</h1>

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
    </div>
  );
};

export default Stats;