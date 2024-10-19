import { FaUnlock } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal } from "../store/slices/commonSlice";
import { useState } from "react";
import { login } from "../store/slices/authSlice";

const LoginModal = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const isModalOpen = useSelector(
    (state) => state.commonSlice.isModalLoginOpen
  );
  const dispatch = useDispatch();
  const handleClickClose = () => {
    dispatch(closeLoginModal());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.username === "atuny0" && formData.password === "9uQFF1Lh") {
      alert("Login Succeed");
      // Login thanh cong
      dispatch(login(formData.username));
      handleClickClose();
      setFormData({
        username: "",
        password: "",
      });
    } else {
      //  Sai Pass
      alert("Wrong username or password");
    }
  };

  if (isModalOpen) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center font-karla">
        <div
          className="relative border shadow rounded p-8 bg-white max-w-md w-full z-40 dark:bg-slate-800 dark:text-white"
          data-test="login-container"
        >
          <RxCross1
            onClick={handleClickClose}
            className="absolute cursor-pointer right-5 top-5 hover:opacity-85"
          />

          {/* Register */}
          {isRegister ? (
            <>
              <div className="flex mb-2 space-x-2 justify-center items-center">
                <GiArchiveRegister />
                <h3 className="font-bold text-center text-xl">Register</h3>
                <GiArchiveRegister />
              </div>
              <p className="leading-4">
                This is a hobby project for development purpose only. No well
                suited backend has been used here. Please use <b>atuny0</b> as
                username & <b>9uQFF1Lh</b> as password. You can find these
                credentials in the placeholder also.{" "}
                <span
                  onClick={() => setIsRegister(false)}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Go to login
                </span>
              </p>
            </>
          ) : (
            <>
              <div className="flex mb-2 space-x-2 justify-center items-center">
                <FaUnlock />
                <h3 className="font-bold text-center text-2xl">Login</h3>
                <FaUnlock />
              </div>
              <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    value={formData.username}
                    onChange={handleChange}
                    name="username"
                    data-test="input-username"
                    type="text"
                    placeholder="Your username here... (atuny0)"
                    className="border w-full border-black py-2 px-8 rounded dark:bg-slate-600"
                  />
                  <RiUser3Fill className="absolute top-3 left-2 text-lg" />
                </div>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    data-test="input-password"
                    type="password"
                    placeholder="Your password here... (9uQFF1Lh)"
                    className="border w-full border-black py-2 px-8 rounded dark:bg-slate-600"
                  />
                  <RiLockPasswordFill className="absolute top-3 left-2 text-lg" />
                </div>
                <input
                  data-test="input-submit"
                  type="submit"
                  value="Submit"
                  className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 cursor-pointer"
                />
              </form>
              <p className="text-center mt-1">
                No Account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsRegister(true)}
                >
                  Register
                </span>
              </p>
            </>
          )}

          {/* Login */}
        </div>
      </div>
    );
  }
  return null;
};

export default LoginModal;
