import { FiUser, FiLock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
function InputForm({ label, name, type, placeholder, require, disable }) {
  return (
    <div className="w-full">
      <label className=" w-full form-control flex flex-col gap-2">
        <span className=" font-medium text-[#020817]">{label}</span>
        <div className="relative">
          <input
            className="border text-sm  w-full placeholder:text-sm ps-8 rounded-lg py-2 focus:outline focus:outline-offset-2 focus:outline-2 outline-blue-600"
            type={type}
            name={name}
            placeholder={placeholder}
            required={require}
            disabled={disable}
          />
          <span className="absolute left-2 opacity-50 top-[50%] translate-y-[-50%] ">
            {name === "user" && <FiUser />}
            {name === "email" && <MdOutlineEmail />}
            {name === "password" && <FiLock />}
            {name === "search" && <FiSearch />}
          </span>
        </div>
      </label>
    </div>
  );
}

export default InputForm;
