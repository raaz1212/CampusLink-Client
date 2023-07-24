import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useBooking from "../../hooks/useBooking";

const MyCollege = () => {
  const { user } = useAuth();
  const [bookings, loading] = useBooking(user?.email);

  return (
    <div>
      <div className="w-full h-40 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-3xl font-bold mt-20 text-white">My College</h1>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center my-10">
        My Admitted Colleges
      </h1>
      <div className="my-10 container mx-auto justify-items-center">
        {loading ? (
          <div className="flex items-center justify-center">
            {/* Loader or Spinner component */}
          </div>
        ) : (
          <div className="flex flex-col gap-10 md:w-2/3 mx-auto p-2 md:p-0 h-screen">
            {bookings.length === 0 ? (
              <p className="text-center text-red-500 h-screen">
                No data available. Data will show after booking an admission.
              </p>
            ) : (
              <ul className="w-full">
                {bookings.map((booking) => (
                  <li key={booking._id} className="p-4 border rounded-md">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold">
                        {booking.collegeName}
                      </h2>
                      <Link to={`/addreview/${booking._id}`}>
                        <button className="bg-red-500 p-2 text-white font-semibold">
                          Add Review
                        </button>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCollege;
