/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../../redux/features/loginActions";

export default function Header({ setShowSidebar, showSidebar }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full border mx-auto shadow bg-white">
      <div className="flex lg:justify-end justify-between px-3 items-center">
        <div className="lg:hidden">
          <Button
            onClick={() => setShowSidebar(!showSidebar)}
            className={"shadow rounded-md"}
            name={<FontAwesomeIcon icon={faBars} className="p-3 text-[20px]" />}
          />
        </div>
        <div className="flex justify-center items-center">
          <Button
            className={"approve-btn m-2"}
            name={"Log out"}
            onClick={() => dispatch(logoutUser())}
          />
        </div>
      </div>
    </div>
  );
}
