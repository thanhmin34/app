import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const hanldeChangeInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    const user = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    if (user && user !== null) {
      navigate("/admin");
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto flex items-center justify-center mt-20 mb-32 ">
      <div className="w-full max-w-[500px] flex flex-col text-base font-medium leading-4">
        <h2 className="text-center text-2xl font-bold mb-8 px-4">
          Chào Mừng bạn đến với trang Đăng nhập
        </h2>
        <form
          onSubmit={hanldeSubmit}
          className="w-full px-10 flex gap-y-4 flex-col "
        >
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={hanldeChangeInput}
            placeholder="Tên Tài Khoản"
            className="px-4 py-[10px] border border-[#f1f1f1] outline-none focus:border-d"
          />
          <input
            type="text"
            value={values.password}
            name="password"
            onChange={hanldeChangeInput}
            placeholder="Mật Khẩu"
            className="px-4 py-[10px] border border-[#f1f1f1] outline-none focus:border-d"
          />
          <button
            type="submit"
            className="mt-10 w-full max-w-[124px] mx-auto text-base outline-none border-none bg-d text-w leading-8 h-8 hover:opacity-75 rounded "
          >
            Đăng Nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
