import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryPie } from "victory";
import { MdKeyboardArrowDown } from "react-icons/md";

const items = [
  { title: "Basic tees", value: 55, color: "#EE8484" },
  { title: "Custom Short Pants", value: 31, color: "#F6DC7D" },
  { title: "Super Hoodies", value: 14, color: "#98D89E" },
];

const DoughnutChart = () => {
  const [doughnutChartData, setDoughnutChartData] = useState<
    { x: string; y: number }[]
  >([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data.slice(0, 3);
        const doughnutData = data.map((item: any) => ({
          x: item.title,
          y: item.id,
        }));
        setDoughnutChartData(doughnutData);
      })
      .catch((error) => {
        console.error("Error fetching doughnut chart data:", error);
      });
  }, []);

  return (
    <div className="bg-white shadow-lg border p-6 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Top Products</h3>
        <p className="flex items-center text-sm text-[#858585] cursor-pointer">
          May - June 2021{" "}
          <span>
            <MdKeyboardArrowDown />
          </span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          {doughnutChartData.length > 0 && (
            <div className="w-[160px] h-[160px]">
              <VictoryPie
                data={doughnutChartData}
                innerRadius={90}
                colorScale={["#98D89E", "#F6DC7D", "#EE8484"]}
                labels={() => null}
              />
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-2">
            {items.map((entry, index) => (
              <div key={index} className="flex ">
                <div
                  className="w-4 h-4 rounded-full mr-2 mt-1"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div>
                  <p className="text-sm font-bold">{entry.title}</p>
                  <p className="text-xs text-[#858585]">{entry.value}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
