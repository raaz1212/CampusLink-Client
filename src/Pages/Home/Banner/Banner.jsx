import { motion } from "framer-motion";
import backgroundImage from "../../../assets/img3.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <motion.div
          className="hero-content text-center text-neutral-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-md">
            <motion.h1
              className="mb-10 text-3xl font-bold text-white "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              WELCOME!!!
            </motion.h1>
            <motion.p
              className="mb-5 text-lg font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Unlock Your Future: Discover Your Dream College Today! 🎓 Apply
              Now for Admissions 2023-2024 📚 Explore Our Diverse Programs and
              World-Class Facilities 🌟 Secure Your Seat in Top-Ranked
              Institutions 🎯 Start Your Journey to Success with Us!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
