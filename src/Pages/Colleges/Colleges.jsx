import { useEffect, useState } from "react";
import axios from "axios";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import CollegeSearch from "../Home/Search/Search";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_API}/colleges`).then((data) => {
      setColleges(data.data);
      setSearchResults(data.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredColleges = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredColleges);
  };

  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold my-10 text-center">All Colleges</h2>
      <CollegeSearch
        onSearch={handleSearch}
        searchResultCount={searchResults.length}
      />
      {searchResults.length === 0 ? (
        <p className="text-center text-red-500 mt-2">
          No results found for `{searchTerm}`
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          {searchResults.map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Colleges;
