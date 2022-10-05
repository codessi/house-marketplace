import React from "react";
import { NavLink, useLocation, useNavigate} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [user, setUser] = useState({});
  const [navOpen, setNavOpen] = useState(false)



  const auth = getAuth();
  const navigate = useNavigate()
  // onAuthStateChanged(auth, (data) => {
  //   setUser(data)
  // })

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUser(data);
    });
  }, []);

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      <nav
        className={` ${
          splitLocation[1] === "" &&
          "absolute w-full bg-gradient-to-b from-gray-800 pb-8  text-white"
        }  flex justify-between items-end z-50 ${
          splitLocation[1] !== "" && "pb-0 border-b-2 border-gray-300 "
        }`}
      >
        <div className="flex gap-2 m-3">
          <button onClick={()=> setNavOpen(!navOpen)} className="block md:hidden">=</button>
          <NavLink to="/">
            <h3 className="text-2xl whitespace-nowrap font-extrabold">
              House <span className="font-light">Marketplace</span>
            </h3>
          </NavLink>
        </div>
        <ul className="flex items-start">
          <div className={`h-0 overflow-hidden left-3 top-14  ${navOpen && "h-auto pb-10 pl-2 pr-10"} absolute  md:p-0 bg-gray-500 md:h-auto md:static md:bg-transparent md:flex items-start z-50  ${
          splitLocation[1] !== "" && "text-white md:text-black "
        }` }>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-600" : ""
              } 
              onClick={() => setNavOpen(false)}
              to="/category/sale"
            >
              <li
                className={`${
                  splitLocation[1] === ""
                    ? "hover:text-blue-800 p-2 hover:bg-white"
                    : "hover:bg-gray-100 p-2 hover:text-blue-800"
                } `}
              >
                Buy{" "}
              </li>
            </NavLink>
            <NavLink onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-600" : ""
              }
              to="/category/rent"
            >
              <li
                className={`${
                  splitLocation[1] === ""
                    ? "hover:text-blue-800 p-2 hover:bg-white"
                    : "hover:bg-gray-100 p-2 hover:text-blue-800"
                } `}
              >
                Rent
              </li>{" "}
            </NavLink>
            <NavLink onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-600" : ""
              }
              to="/create-listing"
            >
              <li
                className={`${
                  splitLocation[1] === ""
                    ? "hover:text-blue-800 p-2 hover:bg-white"
                    : "hover:bg-gray-100 p-2 hover:text-blue-800"
                } `}
              >
                Sell
              </li>
            </NavLink >
            <NavLink onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-600" : ""
              }
              to="/offers"
            >
              <li
                className={`${
                  splitLocation[1] === ""
                    ? "hover:text-blue-800 p-2 hover:bg-white"
                    : "hover:bg-gray-100 p-2 hover:text-blue-800"
                } `}
              >
                <span className="font-extrabold">H</span>M exclusive
              </li>
            </NavLink>
          </div>

          {user && (
            <>
         
              <button type='button'   onClick={onLogout} className="hover:text-blue-800 p-2 hover:bg-white">
                Sign Out
              </button>
       
              <li className=" p-2 ">
                Hello {user?.displayName}
              </li>
            </>
          )}
          {!user && (
            <NavLink onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-600" : ""
              }
              to="/sign-in"
            >
              <li className="hover:text-blue-800 p-2 hover:bg-white">
                Register/Sign In
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
}
