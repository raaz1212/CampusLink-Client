import Gallery from "../../Gallery/Gallery";
import Review from "../../Mycollege/Reviews/Review";
import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";
import ResearchDoc from "../ResearchDoc/ResearchDoc";

const Home = () => {
  return (
    <div className="py-24">
      <Banner />
      <CollegeSection />
      <Gallery />
      <ResearchDoc />
      <Review></Review>
    </div>
  );
};

export default Home;
