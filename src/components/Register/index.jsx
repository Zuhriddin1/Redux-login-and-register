import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/userSlice";
function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(register(user));
    nameRef.current.value = null;
    emailRef.current.value = null;
    passwordRef.current.value = null;
    navigate("/login");
  }
  return (
    <div className="flex flex-col mt-[150px] ml-[600px] text-white">
      <h1 className="-translate-y-11 text-4xl ml-20 text-white">Let's go!</h1>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-white">Full name</span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              ref={nameRef}
              className="grow"
              placeholder="John Doe"
            />
          </label>
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs pt-4">
          <div className="label">
            <span className="label-text text-white">Email</span>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              ref={emailRef}
              className="grow"
              placeholder="example@site.com"
            />
          </label>
        </label>
        <div>
          <label className="form-control w-full max-w-xs mt-3">
            <div className="label">
              <span className="label-text text-white">Choose Password</span>
            </div>
            <label className="mb-5 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow"
                ref={passwordRef}
                placeholder="Minimum 8 characters"
              />
            </label>
          </label>
          <Link to={"/"}>
            <button
              onClick={handleClick}
              className="w-[320px] btn glass text-white bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] "
            >
              Sing up
            </button>
          </Link>
        </div>
        <Link to={"/login"}>
          <button className="w-[320px]  btn glass text-white bg-gradient-to-r from-[#FFF] to-[#FF01] mt-3">
            You are always login
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Register;
