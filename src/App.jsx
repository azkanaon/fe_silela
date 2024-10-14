import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import AccountRequest from "./pages/AccountRequest";
import SidebarMobile from "./components/Sidebar/SidebarMobile";
import Navbar from "./components/Navbar/Navbar";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login_admin";

  return (
    <div className="flex relative bg-overpost">
      {/* Render Sidebar hanya jika bukan halaman login */}
      <div className="hidden md:flex">{!isLoginPage && <Sidebar />}</div>
      {/* Sidebar Mobile */}
      <div className="flex fixed md:hidden">
        {!isLoginPage && <SidebarMobile />}
      </div>

      {/* Konten */}
      <div className={`md:flex-1 transition-all duration-300`}>
        <div className="hidden md:flex">{!isLoginPage && <Navbar />}</div>
        <Routes>
          <Route path="/login_admin" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/riwayat" element={<AccountRequest />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
