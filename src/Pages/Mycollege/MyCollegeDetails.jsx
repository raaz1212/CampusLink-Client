import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import Swal from "sweetalert2";

const MyCollegeDetails = () => {
  const myCollege = useLoaderData();
  const {
    collegeName,
    collegeImage,
    collegeRating,
    subject,
    candidateName,
    candidatePhotoURL,
  } = myCollege;

  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    fetch(`${import.meta.env.VITE_SERVER_API}/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        user_image: data.user_image,
        college_name: collegeName,
        reviewer_name: data.reviewer_name,
        rating: rating,
        feedback: data.feedback,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            title: "Review Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  const onRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div className="w-full h-48 ">
        <div className="bg-black bg-opacity-40 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Add College Review</h1>
        </div>
      </div>
      <div className="my-20 container mx-auto flex flex-col items-center">
        <img
          src={collegeImage}
          alt="College Image"
          className="md:w-1/2 p-2 md:p-0"
        />

        <div className="divider w-full md:w-1/2 mx-auto m-0 p-2 md:p-0"></div>
        <h1 className="text-xl md:text-3xl font-bold">{collegeName}</h1>
        <div className="flex flex-col md:flex-row items-center md:justify-between justify-center w-full md:w-1/2 my-5 p-2 md:p-0 gap-2 md:gap-0">
          <p className="flex gap-5">
            <span className="font-semibold">Rating:</span>
            <span>
              <StarRatingComponent starCount={5} value={collegeRating} />
            </span>
            <span className="font-semibold">Subject:</span>{" "}
            <span>{subject}</span>
          </p>
        </div>
      </div>
      <div className="my-20 container mx-auto">
        <div className="flex flex-col md:w-1/2 gap-5 w-full mx-auto my-5 p-2 md:p-0">
          <h1 className="text-2xl font-semibold">Add a Review</h1>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col gap-4">
                <div className="form-control">
                  <label htmlFor="reviewer_name">Your Name : </label>
                  <input
                    type="text"
                    name="reviewer_name"
                    {...register("reviewer_name")}
                    defaultValue={candidateName}
                    placeholder="Your Name"
                    className="border border-[#131D4E] p-2"
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="user_image">Your Photo URL : </label>
                  <input
                    type="text"
                    name="user_image"
                    {...register("user_image")}
                    defaultValue={candidatePhotoURL}
                    placeholder="Your Photo URL"
                    className="border border-[#131D4E] p-2"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="feedback">Feedback : </label>
                  <textarea
                    name="feedback"
                    cols="30"
                    rows="10"
                    {...register("feedback")}
                    placeholder="Type your Feedback"
                    className="border border-[#131D4E] p-2"
                  ></textarea>
                </div>
                <div className="inline-flex gap-10">
                  <label htmlFor="rating">Rating : </label>
                  <div className="flex gap-3">
                    <StarRatingComponent
                      name="rating"
                      starCount={5}
                      value={rating}
                      onStarClick={onRatingChange}
                    />
                    <p>{rating}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="submit"
                  value="Submit Review"
                  className="bg-[#131D4E] text-white font-semibold px-10 py-3 cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollegeDetails;
