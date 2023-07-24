import { useEffect, useState } from "react";
import axios from "axios";
import CollegeCard from "../../../components/CollegeCard/CollegeCard";

const TopRatedCollegesPage = () => {
  const [topColleges, setTopColleges] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_API}/colleges`).then((data) => {
      // Sort the colleges based on rating in descending order
      const sortedColleges = [...data.data].sort((a, b) => b.rating - a.rating);

      // Select the top 3 colleges
      const top3Colleges = sortedColleges.slice(0, 3);
      setTopColleges(top3Colleges);
    });
  }, []);

  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold my-10 text-center">
        Top Rated Colleges
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
        {topColleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedCollegesPage;
