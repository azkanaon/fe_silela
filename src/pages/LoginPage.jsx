import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log(data);
    alert("Login");

    setData({ username: "", password: "" });
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 bg-backgroundLogin bg-cover bg-center bg-no-repeat filter contrast-75 opacity-70" />
      <div className=" relative flex items-center justify-center h-full">
        <div className="absolute w-5/6 lg:w-3/6 xl:w-2/6 h-1/2 md:h-[60%] bg-aqua rounded-2xl opacity-50" />
        <div className="relative">
          <h1 className="font-bold md:font-semibold text-2xl md:text-[38px] text-overpost text-center mb-5 md:mb-10">
            Login Admin
          </h1>
          <form className="md:w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-overpost md:text-lg font-semibold">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered bg-aqua text-overpost font-semibold"
                required
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </div>
            <div className="form-control mt-3 md:mt-0 ">
              <label className="label">
                <span className="label-text text-overpost md:text-lg font-semibold">
                  Password
                </span>
              </label>
              <div className="relative">
                <div
                  className="absolute text-overpost right-4 top-4 md:right-3 md:top-3 cursor-pointer"
                  onClick={handlePasswordVisibility}
                >
                  {passwordVisibility ? (
                    <FaEyeSlash className="h-4 w-4  md:h-5 md:w-5" />
                  ) : (
                    <FaEye className="h-4 w-4 md:h-5 md:w-5" />
                  )}
                </div>
                <input
                  type={passwordVisibility ? "text" : "password"}
                  placeholder="****************"
                  className="input input-bordered bg-aqua text-overpost font-semibold w-full"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="form-control mt-16">
              <button
                className="btn bg-aqua border-none text-overpost md:text-lg hover:bg-ocean"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
