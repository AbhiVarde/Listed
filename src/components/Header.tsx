import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center  mb-2 sm:mb-0">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="flex justify-between sm:justify-normal w-full sm:w-auto items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg px-4 py-1 focus:outline-none border border-gray-300"
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <FiSearch className="text-gray-400 h-5 w-5" />
          </span>
        </div>
        <div className="flex items-center">
          <FaRegBell className="ml-4 text-xl" />
          <div className="rounded-full bg-gray-300 w-8 h-8 ml-4 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
