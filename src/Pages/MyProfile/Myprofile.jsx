import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const Profile = () => {
  const { user } = useAuth();
  const [singleUser] = useUser(user?.email);
  const { country, dob, email, gender, name, phone, photo, address, college } =
    singleUser;

  const profileData = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Gender", value: gender },
    { label: "Date of Birth", value: dob },
    { label: "Address", value: address },
    { label: "Country", value: country },
    { label: "College", value: college },
  ];

  return (
    <div className="md:h-screen">
      <div className="pageBackground bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText  text-4xl font-bold text-white drop-shadow-2xl">
          My Profile
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full my-20">
        <div>
          <img src={photo} alt="User Photo" className="w-56" />
        </div>
        <div className="md:w-1/3 relative">
          <table className="table border border-black">
            {profileData.map((data) => (
              <tr key={data.label}>
                <td>{data.label}</td>
                <td>
                  : <span className="ml-3">{data.value}</span>
                </td>
              </tr>
            ))}
          </table>
          <Link to="/editProfile">
            <button className="bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E]  font-semibold px-5 py-2 border border-[#131D4E] duration-500">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
