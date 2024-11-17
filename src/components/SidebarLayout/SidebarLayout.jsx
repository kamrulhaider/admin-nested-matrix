import { Link, Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faListCheck,
  faSeedling,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import { useState } from "react";
import Button from "../Button/Button";

export default function SidebarLayout() {
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();
  const routeName = location.pathname;

  return (
    <section className="w-full mx-auto">
      <div className="flex">
        <div
          className={`bg-[#343A40] h-screen ${
            showSidebar
              ? "lg:w-[25%] w-[80%] lg:static z-20 fixed left-0"
              : "hidden lg:w-[25%] lg:block"
          }  overflow-y-auto custom-scroll`}
        >
          <div className="flex justify-between mx-3 pt-3">
            <Link to={"/"} className="text-blue-400 font-bold text-3xl mb-4">
              {/* <img src={logo} className="w-[200px]" /> */}
              <h1>Logo</h1>
            </Link>
            <Button
              onClick={() => setShowSidebar(!showSidebar)}
              className={"shadow rounded-md lg:hidden"}
              name={
                <FontAwesomeIcon
                  icon={faTimes}
                  className="p-3 text-[20px] text-white"
                />
              }
            />
          </div>
          <Link
            to="/"
            className={`text-gray-200 font-semibold w-full ${
              routeName === "/" ? `bg-[#1D267D]` : ""
            }  block py-1`}
          >
            <FontAwesomeIcon icon={faDashboard} className="mx-3" />
            DashBoard
          </Link>
          <Link
            to="/category"
            className={`text-gray-200 font-semibold w-full ${
              routeName === "/category" ? `bg-[#1D267D]` : ""
            }  block py-1`}
          >
            <FontAwesomeIcon icon={faListCheck} className="mx-3" />
            Category
          </Link>
          <Link
            to="/manage-food"
            className={`text-gray-200 font-semibold w-full ${
              routeName === "/manage-food" ? `bg-[#1D267D]` : ""
            }  block py-1`}
          >
            <FontAwesomeIcon icon={faSeedling} className="mx-3" />
            Manage Food
          </Link>
        </div>
        <div className="w-full h-screen overflow-y-auto custom-scroll">
          <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
          <Outlet />
        </div>
      </div>
    </section>
  );
}
