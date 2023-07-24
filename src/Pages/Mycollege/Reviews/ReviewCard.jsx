import { FaQuoteLeft } from "react-icons/fa";
import StarRatingComponent from "react-star-rating-component";

const ReviewCard = ({ review, index }) => {
  if (!review) {
    return null; // Return null if review is not provided
  }

  const { user_image, college_name, reviewer_name, rating, feedback } = review;

  // Add checks for college_name and feedback properties
  const truncatedCollegeName = college_name
    ? college_name.slice(0, 20) + "..."
    : "";
  const truncatedFeedback = feedback ? feedback.slice(0, 90) + "..." : "";

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <div className="flex items-center gap-3">
        <FaQuoteLeft className="text-3xl text-gray-400" />
        <img
          src={user_image}
          alt="user image"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <h1 className="text-2xl font-semibold">{reviewer_name}</h1>
      </div>
      <p className="text-gray-600 text-sm mt-2">{truncatedFeedback}</p>
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-base md:text-lg font-semibold text-blue-700">
          {truncatedCollegeName}
        </h1>
        <StarRatingComponent
          name={`rating_${index}`}
          starCount={5}
          value={rating}
          editing={false}
          renderStarIcon={() => <span>★</span>}
          renderStarIconHalf={() => <span>½</span>}
          starColor="#FFD700"
          emptyStarColor="#D1D5DB"
          starSpacing="2px"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
