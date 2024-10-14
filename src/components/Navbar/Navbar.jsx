import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full flex justify-end text-overpost shadow-xl pr-12 ">
      {/* please make profile info in navbar with button logout */}
      <div className="flex gap-2 py-3 items-center">
        <div className="flex items-center pr-8">
          <img
            src="https://via.placeholder.com/32"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-aqua font-semibold ml-2">Admin Kelurahan</p>
        </div>
        <button className="flex items-center h-8 px-3  rounded-md text-overpost font-semibold bg-ocean hover:bg-aqua hover:scale-105 transition-all">
          Keluar
          <IoIosLogOut size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
