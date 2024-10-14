import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdHistory, MdAccountCircle } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaMailBulk, FaKey } from "react-icons/fa";
import { cn } from "../../utils/twMerge";

const SidebarMenu = () => {
  const location = useLocation();

  const dropdownMenu = [
    {
      label: "Surat Keterangan",
      icon: <FaMailBulk size={20} />,
      link: "/surat-keterangan",
    },
    {
      label: "Registrasi Akun",
      icon: <MdAccountCircle size={20} />,
      link: "/registrasi-akun",
    },
    {
      label: "Reset Password",
      icon: <FaKey size={20} />,
      link: "/reset-password",
    },
  ];

  const isDropdownActive = dropdownMenu.some(
    (item) => item.link === location.pathname
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(isDropdownActive);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="ml-3 mt-4 cursor-pointer transition-all">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold rounded-l-2xl py-3 pl-2 flex items-center ${
            isActive ? "bg-aqua" : "hover:bg-aqua"
          }`
        }
      >
        <IoMdHome size={24} className="mr-2" />
        Dashboard
      </NavLink>

      {/* Dropdown Menu */}
      <div className=" font-semibold rounded-l-2xl my-2">
        <div
          className="flex justify-between hover:bg-aqua hover:rounded-l-xl py-2"
          onClick={toggleDropdown}
        >
          <p className="flex items-center ml-2">
            <CiMail size={24} className="mr-2" />
            Pengajuan
          </p>
          <div className={cn("flex items-center mr-4")}>
            <div
              className={` duration-300 ease-out ${
                isDropdownOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={20} />
            </div>
          </div>
        </div>

        {/* Isi Dropdown */}
        {
          <div
            className={`transform origin-top overflow-hidden transition-transform duration-300 ease-in-out ${
              isDropdownOpen ? "h-fit scale-y-100" : "h-0 scale-y-0"
            }`}
          >
            {dropdownMenu.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                className={({ isActive }) =>
                  `flex my-2 ml-2 py-1  pl-1 rounded-l-xl ${
                    isActive ? "bg-aqua" : "hover:bg-aqua"
                  }`
                }
              >
                <p className="text-md py-1 flex pl-4 items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </p>
              </NavLink>
            ))}
          </div>
        }
      </div>

      {/* Menu Lain */}
      <NavLink
        to="/riwayat"
        className={({ isActive }) =>
          `font-semibold rounded-l-2xl py-3 pl-2 flex items-center ${
            isActive ? "bg-aqua" : "hover:bg-aqua"
          }`
        }
      >
        <MdHistory size={24} className="mr-2" />
        Riwayat
      </NavLink>

      <NavLink
        to="/live-chat"
        className={({ isActive }) =>
          `font-semibold rounded-l-2xl py-3 mt-2 pl-2 flex items-center ${
            isActive ? "bg-aqua" : "hover:bg-aqua"
          }`
        }
      >
        <IoChatboxOutline size={24} className="mr-2" />
        Live Chat
      </NavLink>
    </div>
  );
};

export default SidebarMenu;
