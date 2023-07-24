import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { data } from "autoprefixer";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const auth = getAuth();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login failed. Please check your email and password.",
        });
      });
  };

  const handlePasswordReset = async () => {
    if (!errors.email) {
      try {
        await sendPasswordResetEmail(auth, data.email);
        Swal.fire({
          icon: "success",
          title: "Password reset email sent",
          text: "Check your email to reset your password.",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send password reset email.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid email address first.",
      });
    }
  };

  return (
    <div className="loginPage py-24">
      <div className="card ms-auto me-48 mt-10 flex-shrink-0 w-full max-w-xl bg-base-100 shadow-2xl">
        <h2 className="text-5xl text-center mt-10 font-bold">Please Login!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">email is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover"
                onClick={handlePasswordReset}
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-xl bg-transparent border-black">
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="mx-auto">
            <SocialLogin />
          </div>
          <p className="text-center text-xl">
            New To CampusLink?{" "}
            <Link to="/signUp" className="underline font-bold">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
