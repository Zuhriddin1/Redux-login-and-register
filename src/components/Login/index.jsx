import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add } from "../../redux/tokenSlice";
import UserInfo from "../Table";
function Login() {
  const users = useSelector((state) => state.users.value);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    const user = users.find((el) => {
      return (
        el.email == emailRef.current.value &&
        el.password == passwordRef.current.value
      );
    });
    if (user) {
      dispatch(add(user.email));
      navigate("/");
      setLoggedInUser(user);
    } else {
      alert("Password or email is not found!");
    }
  }
  return (
    <div className="flex flex-col mt-[150px] ml-[600px] text-white">
      <h1 className="-translate-y-11 text-4xl ml-8 text-white">
        Well come back!
      </h1>
      {loggedInUser ? (
        <UserInfo user={loggedInUser} /> // Render UserInfo component if user is logged in
      ) : (
        <div>
          <label className="form-control w-full max-w-xs">
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
                className="w-[320px]  btn glass text-white bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] mt-3"
              >
                Sing in
              </button>
            </Link>
          </div>
        </div>
      )}
      <Link to={"/register"}>
        <button className="w-[320px]  btn glass text-white bg-gradient-to-r from-[#FFF] to-[#FF01] mt-3">
          You are a new user
        </button>
      </Link>
    </div>
  );
}
export default Login;
