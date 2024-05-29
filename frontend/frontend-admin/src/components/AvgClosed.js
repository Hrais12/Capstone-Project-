import { PieChart, Pie, Cell } from "recharts";

import { useContext } from "react";
import { ListingContext } from "../App";

// function AvgClosed() {
//   const { rentedThisYear } = useContext(ListingContext);

//   const totalMonths = new Date().getMonth() + 1;
//   const avgClosed = rentedThisYear / totalMonths;
//   return (
//     <div className="avgClosed">Average closed per month : {avgClosed}</div>
//   );
// }

const RADIAN = Math.PI / 180;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = data.reduce((acc, cur) => acc + cur.value, 0);
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return (
    <>
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="none"
        fill={color}
      />
    </>
  );
};

const AvgClosed = () => {
  const { rentedThisYear } = useContext(ListingContext);

  const totalMonths = new Date().getMonth() + 1; //start from 0 to 11 current-month+1
  const avgClosed = rentedThisYear.length / totalMonths;

  const data = [
    { name: "Category A", value: 5, color: "#ff0000" },
    { name: "Category B", value: 5, color: "#ffff00" },
    { name: "Category C", value: 5, color: "#00ff00" },
  ];
  const cx = 300;
  const cy = 100;
  const iR = 50;
  const oR = 80;
  const value = avgClosed;

  return (
    <div className="goal">
      <h4>Average Closed per Month</h4>
      <div></div>
      <PieChart width={400} height={120}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, "#d0d000")}
      </PieChart>
      <div>{avgClosed} unit</div>
    </div>
  );
};
export default AvgClosed;
