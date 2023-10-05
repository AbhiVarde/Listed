import { Fragment, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import { MdMenu } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import LeftBar from "../components/LeftBar";
import PieChart from "../components/DoughnutChart";
import BarChart from "../components/BarChart";
import Modal from "../components/Modal";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const closetoggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <Fragment>
      <div
        className={`flex min-h-screen p-1 sm:p-4 md:p-6 lg:p-8 bg-[#f5f5f5] ${
          isSidebar ? "overflow-y-hidden" : ""
        } ${isModal ? "overflow-y-hidden h-screen" : ""}`}
      >
        {/* Left Sidebar */}
        <LeftBar sidebarOpen={isSidebar} />

        {/* Right Section */}
        <div className="w-full md:w-4/5 py-4 px-6">
          {/* Header */}
          <Header />

          {/* Cards */}
          <Cards />

          {/* Line Charts */}
          <BarChart />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PieChart />
            <div
              className="bg-white shadow-lg border p-6 rounded-xl flex flex-col justify-center items-center"
              onClick={toggleModal}
            >
              <span className="text-4xl mb-2 p-2 rounded-full text-gray-400 bg-[#F5F5F5] cursor-pointer">
                <AiOutlinePlus />
              </span>
              <p className="font-medium text-gray-500">Add Profile</p>
            </div>
          </div>
        </div>
        {/* Toggle */}
        <button
          className="md:hidden z-10 fixed right-6 top-4 rounded-full bg-[#1f2937] text-white w-10 h-10 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          {isSidebar ? <MdMenu size={24} /> : <MdMenu size={24} />}
        </button>
      </div>
      {isModal ? <Modal closetoggleModal={closetoggleModal} /> : null}
    </Fragment>
  );
};

export default Dashboard;
