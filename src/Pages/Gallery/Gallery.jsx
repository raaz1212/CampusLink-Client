import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";

const Gallery = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-center">Graduation Gallery</h2>

      <div className="grid grid-cols-5 gap-6 p-10 ">
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img1}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img2}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img3}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img4}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img5}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img6}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img7}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img8}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img9}
          alt=""
        />
        <img
          className="rounded-md shadow-lg shadow-yellow-100 transition ease-in-out delay-100 hover:border-2 border-orange-500 duration-200"
          src={img10}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
