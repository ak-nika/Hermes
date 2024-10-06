import { Link } from "react-router-dom";
import { logo } from "../assets";
import Button from "./Button";

const LoginForm = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        action="/profile"
        className="bg-white w-[460px] min-w-[350px] px-7 py-4 rounded-2xl"
      >
        <div className="flex justify-center items-center mb-4">
          <img src={logo} alt="logo" width={64} height={64} />
        </div>

        <h1 className="poppins font-[600] text-[24px] leading-[36px] text-center text-hermes-black">
          Login
        </h1>
        <p className="nunito font-[500] text-[14px] leading-[22.4px] text-center mb-6">
          Receive anonymous compliments from your friends and send anonymous
          messages to your friends for free.
        </p>

        <label>
          <span className="text-[12px] leading-[18px] nunito font-[600]">
            Your Username
          </span>
          <input
            type="text"
            placeholder="Enter Your Username"
            className="text-[16px] font-[600] leading-[24px] nunito border-b-2 border-[#00000033] w-full outline-none mt-1 mb-6 pl-2"
          />
        </label>
        <label>
          <span className="text-[12px] leading-[18px] nunito font-[600]">
            Your Password
          </span>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="text-[16px] font-[600] leading-[24px] nunito border-b-2 border-[#00000033] w-full outline-none mb-6 mt-1 pl-2"
          />
        </label>

        <div className="flex justify-between items-center mt-4">
          <Button className={`w-[40%] min-w-[150px]`}>Login</Button>
          <Link
            to="/createAccount"
            className="nunito font-[600] text-[16px] leading-[18px] text-center"
          >
            Don't have an account? Register
          </Link>
        </div>

        <Link
          to="/"
          className="nunito block font-[500] text-[12px] leading-[18px] text-center mt-7"
        >
          Forgot Password?
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
