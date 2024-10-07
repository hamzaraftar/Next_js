import { FiSearch } from "react-icons/fi";
const Input = () => {
  return (
    <div className="flex relative items-center px-4">
      <FiSearch className="text-white text-3xl absolute ml-1 " />
      <input
        type="text"
        placeholder="Search Contect"
        className="text-white pl-9 bg-transparent border flex-grow border-white outline-none rounded-md h-10"
      />
    </div>
  );
};

export default Input;
