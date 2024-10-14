import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

const PopupResetPassword = ({ handleOpen }) => {
  return (
    <div className="fixed inset-0 bg-black/65">
      <div className="flex items-center justify-center h-screen text-overpost">
        <div className="w-full md:w-1/4 mx-4 md:mx-0  relative bg-aqua rounded-lg flex flex-col items-center ">
          <button
            className="absolute top-4 right-4 text-glacier_blue hover:text-glacier_blue/40"
            onClick={() => {
              handleOpen();
            }}
          >
            <IoMdClose size={32} />
          </button>
          <h1 className="font-semibold mt-4 text-lg md:text-xl">
            Reset Password
          </h1>
          <div className="w-4/5 sm:w-3/5 mt-4">
            <p>Untuk data</p>
            <p>Nama : </p>
            <p>NIK : </p>
          </div>
          <div className="mt-4 sm:w-3/5">
            <label className="input input-bordered flex items-center gap-2 bg-[#FFFFFF]/50 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow placeholder:text-[#727272]"
                placeholder="**********"
              />
            </label>
          </div>
          <div className="mt-4 sm:w-2/5 mb-4">
            <button className="bg-ocean rounded-lg font-semibold py-2 w-full">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PopupResetPassword.propTypes = {
  handleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default PopupResetPassword;
