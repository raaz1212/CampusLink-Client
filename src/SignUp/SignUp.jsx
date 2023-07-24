import SocialLogin from "../components/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          const newUser = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
            // ToDO: here i would be put password: data.password if needed
          };
          fetch(`${import.meta.env.VITE_SERVER_API}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Registration Successfull",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                navigate("/");
              }
            });
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-registerBg w-full min-h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="bg-white bg-opacity-40 md:w-4/6 lg:w-3/6 p-3 m-5 rounded-lg shadow-2xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-barlow font-bold mb-3 md:mb-5 text-center">
          Sign Up with
        </h1>
        <div></div>
        {/* <div className="divider w-1/2 mx-auto text-xl font-barlow my-5">OR</div> */}
        <div className="w-full md:mx-auto ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 md:gap-8 px-5"
          >
            <div className="flex flex-col md:flex-row justify-center md:gap-8 w-full ">
              <div className="w-full md:w-1/2 flex flex-col md:gap-3">
                <div className="form-control">
                  <label htmlFor="name" className="font-barlow font-semibold">
                    Full Name :{" "}
                    {errors.name && (
                      <span className="text-red-500">Name is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder=" Type Your Full Name"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="font-barlow font-semibold">
                    Email Address :{" "}
                    {errors.email && (
                      <span className="text-red-500">Email is required</span>
                    )}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder=" Type Your Email"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="password"
                    className="font-barlow font-semibold"
                  >
                    Password :{" "}
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.type === "required" &&
                          "Password is required"}
                        {errors.password.type === "minLength" &&
                          "Password must be at least 6 characters long"}
                        {errors.password.type === "pattern" &&
                          "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder=" Type Your Password"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor="confirmPassword"
                    className="font-barlow font-semibold"
                  >
                    Confirm Password :{" "}
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword.type === "required" &&
                          "Confirm Password is required"}
                        {errors.confirmPassword.type === "validate" &&
                          errors.confirmPassword.message}
                      </span>
                    )}
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder=" Confirm Password"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === watch("password") || "Password do not match",
                    })}
                  />
                </div>

                <div className="form-control">
                  <label
                    htmlFor="photoURL"
                    className="font-barlow font-semibold"
                  >
                    Photo Url:{" "}
                    {errors.photoURL && (
                      <span className="text-red-500">Photo is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder=" Your Photo Url"
                    className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
                    {...register("photoURL", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="Sign Up"
                className="px-5 py-2 border border-[#131D4E] bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] duration-500 font-barlow font-bold cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-center mb-1">
              <p className="font-barlow md:text-lg font-semibold">
                Already have an account? Please{" "}
                <span className="italic bg-blue-500 px-1 text-white">
                  {" "}
                  <Link to="/login" className="underline hover:no-underline">
                    Login.
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
