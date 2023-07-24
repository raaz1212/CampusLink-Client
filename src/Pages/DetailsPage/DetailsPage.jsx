import { useLoaderData } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const CollegeDetails = () => {
  const college = useLoaderData();
  const {
    image,
    name,
    description,
    admissionStart,
    events,
    researchCount,
    sports,
    rating,
  } = college;

  // Check if sports array exists before mapping
  const sportsList = sports?.map((sports, index) => (
    <span key={index} className="p-[1px] border border-red-500 mr-2">
      {sports}
    </span>
  ));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-800 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">College Details</h1>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:flex md:items-center">
            <img
              src={image}
              alt="College"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <p className="text-lg text-gray-700 mb-4">{description}</p>
            <div className="flex items-center mb-4">
              <span className="font-semibold text-blue-800">Admission:</span>
              <div className="flex items-start ml-2">
                <span className="px-3 py-1 bg-red-500 rounded-md">
                  {admissionStart}
                </span>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-semibold text-blue-800">Sports:</span>
              <div className="flex items-center ml-2">
                {sportsList || <span>No sports available</span>}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-semibold text-blue-800">Rating:</span>
              <div className="flex items-center ml-2">
                <StarRatingComponent starCount={5} value={rating} />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-semibold text-blue-800">
                Number of Research:
              </span>
              <span className="ml-2">{researchCount}</span>
            </div>
          </div>
        </div>
        <div className="my-10 w-1/5">
          <div className="bg-blue-800 text-white py-2 px-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Events</h2>
          </div>
          <div className="bg-white p-4 rounded-b-lg shadow-md">
            {events ? (
              events.map((event, index) => (
                <p key={index} className="mb-2">
                  {event}
                </p>
              ))
            ) : (
              <p>No events available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
