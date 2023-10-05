import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTags } from "react-icons/bs";
import { MdOutlineSchedule, MdOutlineDashboard } from "react-icons/md";

const LeftBar = ({ sidebarOpen }: any) => {
  return (
    <div
      className={`w-full md:w-1/5 bg-[#4285F4] text-white py-14 px-12 flex flex-col justify-between h-screen md:h-[calc(100vh-70px)] ${
        sidebarOpen
          ? "translate-x-0 z-10 overflow-hidden"
          : "-translate-x-full rounded-2xl"
      } transition-transform duration-300 md:translate-x-0 fixed md:relative`}
    >
      <div>
        <h1 className="text-4xl font-bold mb-4">Board.</h1>
        <ul className="mb-8 text-lg cursor-pointer">
          <li className="flex items-center hover:font-bold py-2">
            <MdOutlineDashboard className="mr-2" />
            Dashboard
          </li>
          <li className="flex items-center py-2 hover:font-bold">
            <BsTags className="mr-2" />
            Transactions
          </li>
          <li className="flex items-center py-2 hover:font-bold">
            <MdOutlineSchedule className="mr-2" />
            Schedulers
          </li>
          <li className="flex items-center py-2 hover:font-bold">
            <FaRegUserCircle className="mr-2" />
            Users
          </li>
          <li className="flex items-center py-2 hover:font-bold">
            <IoSettingsOutline className="mr-2" />
            Settings
          </li>
        </ul>
      </div>
      <div className="cursor-pointer">
        <ul className="text-base">
          <li className="flex items-center py-2 hover:font-bold">Help</li>
          <li className="flex items-center py-2 hover:font-bold">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
