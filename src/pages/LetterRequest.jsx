import { useNavigate } from "react-router-dom";
import Table4Column from "../components/Table4Column";

const LetterRequest = () => {
  const dataTHead = ["No", "NIK", "Jenis Surat", "Waktu", "Tindakan"];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  const action = "Detail";

  return (
    <div>
      <div className="px-4 lg:px-12 mt-5 overflow-x-auto w-screen md:w-full h-screen sm:h-fit">
        {/* TITLE */}
        <div className="text-aqua font-semibold">
          <div>
            <h1 className="text-4xl font-bold">Surat Pengajuan</h1>
          </div>
        </div>

        <Table4Column
          handleOpen={handleNavigate}
          dataTHead={dataTHead}
          action={action}
        />
      </div>
    </div>
  );
};

export default LetterRequest;
