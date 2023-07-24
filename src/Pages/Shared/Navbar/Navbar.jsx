import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/myCollege">My College</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar fixed z-10 shadow-md bg-base-100 max-w-[1460px] opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <h1>CAMPUSLINK</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <Link to="/myProfile">
          {user && (
            <div className="flex flex-col-reverse gap-3 cursor-pointer items-center border-4 rounded-md p-1 text-xs">
              <h2>{user?.displayName}</h2>
              <div className="avatar">
                <div className="w-10 rounded-full ">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
          )}
        </Link>
        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="btn btn-xs btn-ghost">
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-xs btn-ghost">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
