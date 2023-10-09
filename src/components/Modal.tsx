import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface FormData {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  youtube: string;
}

const Modal = ({ closetoggleModal, onSubmit }: any) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });
  const [showBasicForm, setShowBasicForm] = useState(true);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const setInstagramUsername = () => {
      const match = value.match(/(?:www\.)?instagram\.com\/([a-zA-Z0-9_]+)/i);
      setFormData({ ...formData, [name]: match ? `@${match[1]}` : "" });
      setError(match ? "" : "Invalid Instagram URL");
    };

    switch (name) {
      case "name":
      case "email":
      case "phone":
        setFormData({ ...formData, [name]: value });
        break;
      case "instagram":
        setInstagramUsername();
        break;
      case "youtube":
        try {
          const videoId =
            new URL(value).searchParams.get("v") ||
            value.split("/").slice(-1)[0];
          setFormData({
            ...formData,
            [name]: videoId ? `${videoId}` : "",
          });
          setError("");
        } catch (error) {
          console.log(error);
          setError("Invalid YouTube URL");
        }
        break;
      default:
        break;
    }
  };

  const handleFormChange = () => {
    setShowBasicForm(!showBasicForm);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const requiredFields: (keyof FormData)[] = ["name", "email", "phone"];
    const isFormValid = requiredFields.every((field) => formData[field] !== "");

    if (!isFormValid) {
      setError("Please fill out all required fields.");
      return;
    }

    if (!isFormValid) {
      setError("Please fill out all required fields.");
      return;
    }
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      instagram: "",
      youtube: "",
    });
    closetoggleModal();
  };

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25 flex justify-center items-center">
      <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white p-8 rounded-lg">
        <div className="flex justify-between items-center mb-4 text-base md:text-lg lg:text-xl font-semibold">
          <p>Add New Profile</p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={closetoggleModal}
          />
        </div>
        <div className="flex mb-2 gap-2 text-base md:text-lg">
          <div
            className={`flex justify-center w-80 pb-1 border-b-4 ${
              showBasicForm ? "border-b-blue-400" : ""
            }`}
            onClick={() => setShowBasicForm(true)}
          >
            Basic
          </div>
          <div
            className={`flex justify-center w-80 pb-1 border-b-4 ${
              !showBasicForm ? "border-b-blue-400" : ""
            }`}
            onClick={() => setShowBasicForm(false)}
          >
            Social
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          {showBasicForm ? (
            <div>
              <div className="flex flex-col mb-2">
                <label className="mb-1 font-semibold tracking-wide">
                  Enter Name*
                </label>
                <input
                  type="text"
                  className="p-2 border rounded-lg"
                  placeholder="Eg. John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col mb-2">
                <label className="mb-1 font-semibold tracking-wide">
                  Instagram Link <span className="font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="p-2 border rounded-lg"
                  placeholder="Eg. ..instagram.com/username"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col mb-2">
                <label className="mb-1 font-semibold tracking-wide">
                  Youtube Link <span className="font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="p-2 border rounded-lg"
                  placeholder="Eg. ..youtube/username"
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {showBasicForm ? (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleFormChange}
                className="bg-blue-400 px-3 py-2 rounded-lg text-white"
              >
                Next
              </button>
            </div>
          ) : (
            <div className="flex gap-2 justify-end mt-4">
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
                Done
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
