import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { MdKeyboardArrowDown } from "react-icons/md";

const BarChart = () => {
  const [barChartData, setBarChartData] = useState<{
    options: {};
    series: { name: string; data: any[]; curve?: string }[];
  } | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data.slice(0, 6);
        const barData = {
          options: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: data.map((item: any) => item.username),
            },
            colors: ["#EE8484", "#98D89E"],
            legend: {
              position: "top",
              horizontalAlign: "right",
              labels: {
                colors: "#333",
              },
            },
          },
          series: [
            {
              name: "Series 1",
              data: data.map((item: any) => item.id),
            },
            {
              name: "Series 2",
              data: data.map((item: any) => item.id + 2),
            },
          ],
        };
        setBarChartData(barData);
      })
      .catch((error) => {
        console.error("Error fetching bar chart data:", error);
      });
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg border p-6 mb-4 w-full">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-2 md:mb-0">
          <h3 className="text-lg font-bold">Activities</h3>
          <p className="flex items-center text-sm text-[#858585] cursor-pointer">
            May - June 2021{" "}
            <span>
              <MdKeyboardArrowDown />
            </span>
          </p>
        </div>
      </div>
      {barChartData && (
        <Chart
          options={barChartData.options}
          series={barChartData.series}
          type="bar"
          height="212"
          width="100%"
        />
      )}
    </div>
  );
};

export default BarChart;
