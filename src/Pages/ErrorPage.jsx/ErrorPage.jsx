import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/error.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn bg-blue-800 hover:bg-blue-600 text-white"
      >
        {" "}
        Go Back
      </button>
      <div>
        <img className="w-9/12 mx-auto" src={errorImg} alt="" />
        <p className="text-3xl text-red-600 text-center my-10">
          This Page is not accessable.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
