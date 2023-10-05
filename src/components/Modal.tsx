import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ closetoggleModal }: any) => {
  const [showBasicForm, setShowBasicForm] = useState(true);

  const handleFormChange = () => {
    setShowBasicForm(!showBasicForm);
  };

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25 flex justify-center items-center">
      <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white p-8 rounded-lg">
        <div className="flex justify-between items-center mb-4 text-base md:text-lg lg::text-xl">
          <p className="font-semibold">Add New Profile</p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={closetoggleModal}
          />
        </div>
        <div className="flex mb-2 gap-2 text-base md:text-lg">
          <div
            className={`flex justify-center w-80 pb-1 border-b-2 ${
              showBasicForm ? "active:border-b-blue-400" : ""
            }`}
            onClick={() => setShowBasicForm(true)}
          >
            Basic
          </div>
          <div
            className={`flex justify-center w-80 pb-1 border-b-2 ${
              !showBasicForm ? "active:border-b-blue-400" : ""
            }`}
            onClick={() => setShowBasicForm(false)}
          >
            Social
          </div>
        </div>
        {showBasicForm ? (
          <form>
            <div className="flex flex-col mb-2">
              <label className="mb-1 font-semibold tracking-wide">
                Enter Name*
              </label>
              <input
                type="text"
                className="p-2 border rounded-lg"
                placeholder="Eg. John Doe"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="mb-1 font-semibold tracking-wide">
                Enter Email*
              </label>
              <input
                type="email"
                className="p-2 border rounded-lg"
                placeholder="Eg. John@xyz.com"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="mb-1 font-semibold tracking-wide">
                Enter Phone*
              </label>
              <input
                type="tel"
                className="p-2 border rounded-lg"
                placeholder="Eg. 9123456789"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleFormChange}
                className="bg-blue-400 px-3 py-2 rounded-lg text-white"
              >
                Next
              </button>
            </div>
          </form>
        ) : (
          <form>
            <div className="flex flex-col mb-2">
              <label className="mb-1 font-semibold tracking-wide">
                Instagram Link <span className="font-normal">(Optional)</span>
              </label>
              <input
                type="url"
                className="p-2 border rounded-lg"
                placeholder="Eg. ..instagram.com/username"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="mb-1 font-semibold tracking-wide">
                Youtube Link <span className="font-normal">(Optional)</span>
              </label>
              <input
                type="url"
                className="p-2 border rounded-lg"
                placeholder="Eg. ..youtube/username"
              />
            </div>

            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={handleFormChange}
                className="px-3 py-2 rounded-lg border border-black"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-400 px-3 py-2 rounded-lg text-white"
              >
                Next
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
