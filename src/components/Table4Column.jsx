import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Table4Column = ({ handleOpen, dataTHead, action }) => {
  return (
    <div>
      {/* TABLE USER */}
      <div className="mt-10">
        {/* Limit and Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between mb-3">
          {/* LIMIT */}
          <div className="flex items-center gap-2 font-semibold">
            <label className="text-aqua">Perlihatkan</label>
            <select className="px-2 py-1 rounded-md text-aqua outline-none h-10 focus:border-aqua">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label className="text-aqua">Baris</label>
          </div>
          {/* SEARCH */}
          <div className="flex items-center gap-2 overflow-hidden ">
            <label className="input input-bordered flex items-center gap-2 h-10">
              <input type="text" className="grow" placeholder="Cari" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto w-full ">
        <table className="min-w-full border">
          {/* head */}
          <thead className="bg-seaform">
            <tr className="text-aqua font-semibold">
              {dataTHead.map((head, index) => (
                <th key={index} className="px-4 py-2">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[#D9F2F9]">
            {/* row 1 */}
            <tr className="text-aqua h-12">
              <th className="border px-4 py-2">1</th>
              <td className="border px-4 py-2">Cy Ganderton</td>
              <td className="border px-4 py-2">Quality Control Specialist</td>
              <td className="border px-4 py-2">Blue</td>
              <td className="text-center text-sm md:text-base text-overpost">
                <button
                  className="p-1 rounded-lg font-semibold px-2 bg-aqua text-overpost transition-all duration-300 hover:bg-ocean"
                  onClick={() => {
                    handleOpen(1);
                  }}
                >
                  {action}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center bg-seaform">
        <div className="flex gap-2 my-2 text-aqua">
          <button className="bg-overpost px-2 rounded-md hover:bg-seaform transition-colors">
            <IoIosArrowBack />
          </button>
          <button className="bg-overpost px-2 rounded-md hover:bg-seaform transition-colors">
            1
          </button>
          <button className="bg-overpost px-2 rounded-md hover:bg-seaform transition-colors">
            2
          </button>
          <button className="bg-overpost px-2 rounded-md hover:bg-seaform transition-colors">
            3
          </button>
          <button className="bg-overpost px-2 rounded-md hover:bg-seaform transition-colors">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

Table4Column.propTypes = {
  handleOpen: PropTypes.func,
  dataTHead: PropTypes.array,
  action: PropTypes.string,
};

export default Table4Column;
