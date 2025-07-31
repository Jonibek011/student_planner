import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
function SIdebar({ openSidebar }) {
  return (
    <div className={`h-full  border-r-2 p-1`}>
      <div className="dropdown w-full">
        <details className=" dropdown w-full ">
          <summary className=" btn  btn-sm px-4 hover:bg-gray-200 border-none  w-full h-10 rounded-xl  shadow-none font-medium opacity-85 flex justify-between ">
            Student Planner <IoIosArrowDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-xl z-[1] w-full p-2 shadow ">
            <li>
              <a>Mening rejam</a>
            </li>
            <li>
              <a>Sozlamalar</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="menu flex flex-col gap-2 p-0 mt-5">
        <div className="menu-name">
          <h2 className="font-light opacity-75 text-[13px] px-5">Asosiy</h2>
        </div>
        <div className="menu-list">
          <ul className="pl-0 list-none  flex flex-col  ">
            <li className="">
              <NavLink to="/dashboard">
                {" "}
                <span>
                  <FiHome className="w-4 h-4 " />
                </span>
                <span className="">Bosh sahifa</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/subjects"
                className="flex gap-2 items-center font-extralight]"
              >
                <span>
                  <IoBookOutline className="font-light  w-4 h-4" />
                </span>
                <span className="">Fanlar</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/login" className="text-[#3F3F46]">
                <span>
                  <PiCalendarCheckDuotone className="  w-4 h-4" />{" "}
                </span>
                <span className="">Topshiriqlar</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="fanlar" className="text-[#3F3F46]">
                <span>
                  <PiCalendarCheckDuotone className="  w-4 h-4" />
                </span>
                <span className="">O'qish sessiyalari</span>
              </NavLink>
            </li>

            <li>
              <Link className="flex gap-2 items-center font-extralight ">
                <span>
                  {" "}
                  <TbTargetArrow className="font-light w-4 h-4" />
                </span>
                <span className="">Maqsadlar</span>
              </Link>
            </li>

            <li>
              <Link className="flex gap-2 items-center font-extralight text-[222.2 47.4% 11.2%]">
                <span>
                  <IoBookOutline className=" w-4 h-4" />
                </span>
                <span>Darslar</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SIdebar;
