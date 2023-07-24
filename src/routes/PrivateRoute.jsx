import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className="text-center mt-72">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to Login first to access this.",
    });
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRout;
