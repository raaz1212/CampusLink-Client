import { useState } from "react";

const CollegeSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 w-full max-w-lg mx-auto">
      <div className="flex items-center border border-gray-400 rounded-md px-4 py-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for colleges..."
          className="w-full bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2 hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default CollegeSearch;
