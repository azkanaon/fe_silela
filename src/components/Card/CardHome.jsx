import PropTypes from "prop-types";

const CardHome = ({ title, totalProcess, totalFinish, icon }) => {
  return (
    <div className="w-full md:w-[40%] lg:w-[30%] bg-seaform text-aqua rounded-xl h-[260px] md:h-[280px] lg:h-[325px]">
      {/* Judul */}
      <div className="flex justify-center mt-8">
        <h2 className="text-2xl font-bold">Pengajuan {title}</h2>
      </div>
      <div className="flex justify-between font-semibold">
        <div className="w-full">
          <div className="mt-3 w-4/5 text-overpost">
            <p className="text-center text-aqua text-lg mb-3">Diproses</p>
            {/* UBAH JDI LINK WAKTU UDH INTEGRASI SAMA API */}
            <div className="bg-glacier_blue rounded-lg h-28 flex flex-col items-center justify-center transition-transform transform duration-300 hover:scale-105 cursor-pointer">
              <div className="">{icon}</div>
              <p className="mt-1 text-lg">
                {totalProcess} {title}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="mt-3 w-4/5 text-overpost">
            <p className="text-center text-aqua text-lg mb-3">Selesai</p>
            {/* UBAH JDI LINK WAKTU UDH INTEGRASI SAMA API */}
            <div className="bg-aqua rounded-lg h-28 flex flex-col items-center justify-center  transition-transform transform duration-300 hover:scale-105 cursor-pointer">
              <div className="">{icon}</div>
              <p className="mt-1 text-lg">
                {totalFinish} {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardHome.propTypes = {
  title: PropTypes.string,
  totalFinish: PropTypes.number,
  totalProcess: PropTypes.number,
  icon: PropTypes.elementType,
};

export default CardHome;
