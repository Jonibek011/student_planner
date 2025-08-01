import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { FaXmark } from "react-icons/fa6";
import { LuBookOpen } from "react-icons/lu";
//global context
import { useGlobalContext } from "../hooks/useGlobalContext";
//main function
function MobileSidebar() {
  const { openSidebar, dispatch } = useGlobalContext();
  const toggleSidebar = () => {
    dispatch({ type: "CHANGE", payload: openSidebar === true ? false : true });
  };
  return (
    <div className={`h-full  border-r-2 p-1 relative`}>
      <span
        className="absolute top-4 right-2 cursor-pointer"
        onClick={toggleSidebar}
      >
        <FaXmark className="w-5 h-5" />
      </span>
      <span className="absolute top-6 left-6 cursor-pointer">
        <LuBookOpen className="w-6 h-6" />
      </span>
      <div className="menu mt-[10vh] flex flex-col gap-2 p-0 ">
        <div className="menu-list">
          <ul className="pl-0 list-none  flex flex-col gap-4 ">
            <li className="">
              <Link onClick={toggleSidebar} to="/dashboard">
                {" "}
                <span>
                  <FiHome className="w-5 h-5 " />
                </span>
                <span className="text-lg font-semibold text-[#71717A]">
                  Bosh sahifa
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                to="/subjects"
                className="flex gap-2 items-center font-extralight]"
              >
                <span>
                  <IoBookOutline className="font-light  w-5 h-5" />
                </span>
                <span className="text-lg font-semibold text-[#71717A]">
                  Fanlar
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                to="/login"
                className="text-[#3F3F46]"
              >
                <span>
                  <PiCalendarCheckDuotone className="  w-5 h-5" />{" "}
                </span>
                <span className="text-lg font-semibold text-[#71717A]">
                  Topshiriqlar
                </span>
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                to="fanlar"
                className="text-[#3F3F46]"
              >
                <span>
                  <PiCalendarCheckDuotone className="  w-5 h-5" />
                </span>
                <span className="text-lg font-semibold text-[#71717A]">
                  O'qish sessiyalari
                </span>
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center font-extralight ">
                <span>
                  {" "}
                  <TbTargetArrow className="font-light w-5 h-5" />
                </span>
                <span className="text-lg font-semibold text-[#71717A]">
                  Maqsadlar
                </span>
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center font-extralight text-[222.2 47.4% 11.2%]">
                <span>
                  <IoBookOutline className=" w-5 h-5" />
                </span>
                <span className="text-lg font-semibold text-[#71717A]">
                  Darslar
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
