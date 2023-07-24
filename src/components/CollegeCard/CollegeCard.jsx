import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    _id,
    name,
    image,
    researchHistory,
    admissionStart,
    admissionEnd,
    rating,
  } = college;

  return (
    <div className="card bg-slate-50 shadow-xl hover:shadow-2xl rounded-lg overflow-hidden">
      <figure>
        <img className="w-full h-48 object-cover" src={image} alt="colleges" />
      </figure>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-3 text-center">{name}</h2>
        <p className="line-clamp-2 text-lg mb-4">{researchHistory}</p>
        <div className="flex items-center mb-4">
          <span className="font-bold text-blue-800">Ratings:</span>
          <div className="flex items-center ml-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-yellow-500" : "text-gray-400"}
              />
            ))}
          </div>
        </div>
        <h2 className="text-left mb-3">
          <span className="font-bold text-blue-800">Admission Starts:</span>{" "}
          {admissionStart}
        </h2>
        <h2 className="text-left mb-4">
          <span className="font-bold text-blue-800">Admission Ends:</span>{" "}
          {admissionEnd}
        </h2>
        <Link to={`/details/${_id}`}>
          <button className="btn w-full bg-blue-800 hover:bg-blue-600 text-xl text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
