import { FaMoneyBills } from "react-icons/fa6";
import { BsTag } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";

const Cards = () => {
  const data = [
    {
      bgColor: "#ddefe0",
      icon: <FaMoneyBills className="absolute top-5 left-7 w-6 h-6" />,
      title: "Total Revenues",
      value: "$2,129,430",
      margin: "+2.5%",
    },
    {
      bgColor: "#f4ecdd",
      icon: <BsTag className="absolute top-5 left-7 w-6 h-6" />,
      title: "Total Transactions",
      value: "1,520",
      margin: "+1.7%",
    },
    {
      bgColor: "#efdada",
      icon: <AiOutlineLike className="absolute top-5 left-7 w-6 h-6" />,
      title: "Total Likes",
      value: "9,721",
      margin: "+1.4%",
    },
    {
      bgColor: "#dee0ef",
      icon: <RiUserLine className="absolute top-5 left-7 w-6 h-6" />,
      title: "Total Users",
      value: "9,721",
      margin: "+4.2%",
    },
  ];

  const renderedItems = data.map((item, index) => (
    <div
      key={index}
      className="rounded-xl shadow-lg border py-4 px-6 relative h-28"
    >
      <div
        className=" w-8 h-8 flex items-center rounded-full"
        style={{ backgroundColor: item.bgColor }}
      >
        <span> {item.icon}</span>
      </div>
      <p className="text-sm font-semibold tracking-wide bottom-3 left-6">
        {item.title}
      </p>
      <div className="flex justify-between items-center">
        <p className="sm:text-xl lg:text-2xl font-bold">{item.value}</p>
        <p className="text-sm p-1 rounded-xl bg-green-100 font-medium text-green-600">
          {item.margin}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
      {renderedItems}
    </div>
  );
};

export default Cards;
