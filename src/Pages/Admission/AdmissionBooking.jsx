import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AdmissionBooking = () => {
  const { user } = useAuth();
  const college = useLoaderData();
  const {
    name,
    image,
    admission_date,
    events,
    research_history,
    sports,
    rating,
    number_of_research,
  } = college;
  const { register, handleSubmit, reset, setValue } = useForm();

  // Autofill candidate name, email, and photoURL with user information
  useEffect(() => {
    if (user) {
      setValue("name", user.displayName || "");
      setValue("email", user.email || "");
      setValue("photoURL", user.photoURL || ""); // Add this line to autofill the photoURL field
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/bookings`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        uid: user.uid,
        collegeName: name,
        collegeImage: image,
        admissionDate: admission_date,
        events: events,
        researchHistory: research_history,
        sports: sports,
        collegeRating: rating,
        numberOfResearch: number_of_research,
        candidateName: data.name,
        candidateEmail: data.email,
        candidatePhotoURL: data.photoURL,
        candidatePhoneNumber: data.phone,
        address: data.address,
        dob: data.dob,
        subject: data.subject,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            title: "Admission Booking Successful!",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };
  return (
    <div>
      <div className="w-full h-40 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-3xl font-bold mt-20 text-white">
            Admission Booking
          </h1>
        </div>
      </div>
      <h1 className=" text-xl md:text-3xl font-semibold text-center mt-10">
        Book your Admission for {name}
      </h1>
      <div className="mb-10 mt-5 container mx-auto justify-items-center p-2 md:p-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <div className="form-control">
              <label htmlFor="name">Candidate Name : </label>
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Candidate Name"
                className="border border-[#131D4E] p-2"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Candidate Email : </label>
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="Candidate Email"
                className="border border-[#131D4E] p-2"
              />
            </div>
            <div className="form-control">
              <label htmlFor="photoURL">Candidate Photo URL : </label>
              <input
                type="text"
                name="photoURL"
                {...register("photoURL")}
                placeholder="Candidate Photo URL"
                className="border border-[#131D4E] p-2"
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Candidate Phone Number : </label>
              <input
                type="text"
                name="phone"
                {...register("phone")}
                placeholder="Candidate Phone Number"
                className="border border-[#131D4E] p-2"
              />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address : </label>
              <input
                type="text"
                name="address"
                {...register("address")}
                placeholder="Address"
                className="border border-[#131D4E] p-2"
              />
            </div>
            <div className="form-control">
              <label htmlFor="dob">Date of Birth : </label>
              <input
                type="date"
                name="dob"
                {...register("dob")}
                placeholder="Date of Birth"
                className="border border-[#131D4E] p-2"
              />
            </div>
            <div className="form-control">
              <label htmlFor="subject">Subject : </label>
              <input
                type="text"
                name="subject"
                {...register("subject")}
                placeholder="Subject"
                className="border border-[#131D4E] p-2"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Submit"
              className="bg-[#131D4E] text-white font-semibold px-10 py-3 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionBooking;
