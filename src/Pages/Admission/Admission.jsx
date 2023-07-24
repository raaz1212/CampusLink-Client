import useCollege from "../../hooks/useCollege";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, loading] = useCollege();
  return (
    <div>
      <div className="w-full h-40 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-3xl font-bold mt-20 text-white">Admission</h1>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center my-10">
        Admission Going On
      </h1>
      <div className="my-10 container mx-auto justify-items-center">
        {loading ? (
          <div className="flex items-center justify-center">
            <InfinitySpin width="200" color="#131D4E" />
          </div>
        ) : (
          <div className="flex flex-col gap-10 md:w-2/3 mx-auto p-2 md:p-0 ">
            {colleges.map((college) => (
              <div key={college._id}>
                <Link to={`/booking/${college._id}`}>
                  <p className="flex justify-between border-t last:border-b border-[#131D4E] py-3">
                    <span className="font-semibold">{college.name}</span>
                    <span>
                      Start Date:{" "}
                      <small className="bg-red-500 p-2 text-white font-semibold">
                        {college.admissionStart}
                      </small>
                    </span>
                    <span>
                      Last Date:{" "}
                      <small className="bg-red-500 p-2 text-white font-semibold">
                        {college.admissionEnd}
                      </small>
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Admission Starts: {college.admissionStart}
                  </p>
                  <p className="text-sm text-gray-500">
                    Rating: {college.rating}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admission;
