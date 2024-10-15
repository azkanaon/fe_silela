import { useState } from "react";

import PopupResetPassword from "../components/PopupResetPassword";
import Table4Column from "../components/Table4Column";

const ResetPasswordPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const dataTHead = ["No", "NIK", "Nama", "Waktu", "Tindakan"];
  const action = "Reset Password";

  return (
    <div>
      {isPopupOpen && <PopupResetPassword handleOpen={handlePopupOpen} />}

      <div className="px-4 lg:px-12 mt-5 overflow-x-auto w-screen md:w-full h-screen sm:h-fit">
        {/* TITLE */}
        <div className="text-aqua font-semibold">
          <div>
            <h1 className="text-4xl font-bold">Reset Password Akun Warga</h1>
          </div>
        </div>

        <Table4Column
          handleOpen={handlePopupOpen}
          dataTHead={dataTHead}
          action={action}
        />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
