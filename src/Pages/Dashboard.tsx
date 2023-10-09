import { Fragment, useState } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import { MdMenu } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import LeftBar from "../components/LeftBar";
import DoughnutChart from "../components/DoughnutChart";
import BarChart from "../components/BarChart";
import Modal from "../components/Modal";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";

const Dashboard = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setIsModal(false);
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
            <DoughnutChart />
            {!isModal && formData ? (
              <div className="bg-white shadow-lg border p-6 rounded-xl flex flex-col ">
                <p className="text-xl mb-8 p-2 font-bold">{formData.name}</p>
                <div className="flex justify-between items-center mb-4 px-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#d7f9dc]">
                      <span>
                        <FaWhatsapp className="text-[#3CC952]" />
                      </span>
                    </div>
                    <p className="text-sm underline cursor-pointer">
                      {formData.phone}
                    </p>
                  </div>
                  {formData.instagram ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#fbd3d3]">
                        <span>
                          <FaInstagram className="text-[#FF4E64]" />
                        </span>
                      </div>
                      <p className="text-sm underline cursor-pointer">
                        {formData.instagram}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex justify-between items-center px-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#e9e1ff]">
                      <span>
                        <AiOutlineMail className="text-[#5C33CF]" />
                      </span>
                    </div>
                    <p className="text-sm underline cursor-pointer">
                      {formData.email}
                    </p>
                  </div>
                  {formData.youtube ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex justify-center items-center rounded-full bg-[#fbd3d3]">
                        <span>
                          <AiOutlineYoutube className="text-[#FF4E64]" />
                        </span>
                      </div>
                      <p className="text-sm underline cursor-pointer">
                        {formData.youtube}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              <div
                className="bg-white shadow-lg border p-6 rounded-xl flex flex-col justify-center items-center"
                onClick={toggleModal}
              >
                <span className="text-4xl mb-2 p-2 rounded-full text-gray-400 bg-[#F5F5F5] cursor-pointer">
                  <AiOutlinePlus />
                </span>
                <p className="font-medium text-gray-500">Add Profile</p>
              </div>
            )}
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
      {isModal ? (
        <Modal closetoggleModal={toggleModal} onSubmit={handleFormSubmit} />
      ) : null}
    </Fragment>
  );
};

export default Dashboard;
