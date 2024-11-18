import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/loginActions";

export default function ProfileMenuDropdown() {
  const dispatch = useDispatch();

  const username = Cookies.get("username");
  const userRole = Cookies.get("role");

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center">
            <span className="text-gray-700 bg-purple-400 font-bold p-1">
              {userRole}
            </span>
            <span className="text-gray-700 bg-orange-400 font-bold p-1">
              {username}
              <FontAwesomeIcon className="ms-2" icon={faAngleDown} />
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="p-2">
              <Link
                className="hover:text-purple-800 transition-all ease-in-out block mb-2"
                to={"/"}
              >
                Profile
              </Link>
              <button
                onClick={() => dispatch(logoutUser())}
                type="button"
                className="hover:text-purple-800 transition-all ease-in-out block mb-2"
              >
                Logout
              </button>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
