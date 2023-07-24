import { InfinitySpin } from "react-loader-spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import useReview from "../../../hooks/useReview";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, loading] = useReview();
  const swiperBreakpoints2 = {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="mb-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Reviews and Feedback
        </h1>
      </div>
      <div className="container mx-auto mt-10 p-2 md:p-10 reviewBackground bg-no-repeat bg-cover bg-center">
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              <InfinitySpin width="200" color="#131D4E" />
            </div>
          ) : (
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              breakpoints={swiperBreakpoints2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={review._id}>
                  <ReviewCard review={review} index={index}></ReviewCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
