import { useRef, useState } from "react";
import { Validate } from "../utils/validate";
import Header from "./Header";
const Login = () => {
  const [checksign, setchecksign] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handledClick = () => {
    const message = Validate(email.current.value, password.current.value,name?.current?.value);
    seterrorMessage(message);
  };

  const togglebtn = () => {
    if (checksign === true) {
      setchecksign(false);
    } else {
      setchecksign(true);
    }
  };
  return (
    <div className="overflow-y-hidden ">
      <Header />
      <div>
        <img
          className="background-img h-screen w-screen bg-cover bg-center bg-no-repeat"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6e4b7575-5e77-4cbc-b380-6b57b4cb2652/web/IN-en-20261012-TRIFECTA-perspective_df4c506a-8fba-4611-95c0-3190bfc683ca_large.jpg"
        ></img>
      </div>
      <form
        className="w-3/12 h-4/6 absolute top-28 my-1 mx-auto right-0 left-0 bg-black bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl font-bold text-2xl mx-9 w-[50%] my-5">
          {checksign ? "Sign In" : "Sign Up"}
        </h1>
        {checksign ? (
          ""
        ) : (
          <input
            ref={name}
            className="py-3 text-center my-3 mx-9 w-[80%] focus:placeholder-transparent focus:outline-none bg-gray-500 "
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="py-3 text-center my-3 mx-9 w-[80%] focus:placeholder-transparent focus:outline-none bg-gray-500 text-white"
          type="text"
          placeholder="Email or Mobile Number"
        ></input>
        <input
          ref={password}
          className="bg-grey py-3 text-center my-3 mx-9 w-[80%] focus:placeholder-transparent focus:outline-none  bg-gray-500"
          type="password"
          placeholder="Password"
        ></input>
        <div className="errorMsg text-red-600 mx-9 w-[50%] cursor-pointer w-1/2">
          {errorMessage}
        </div>
        <button
          className="p-3 text-center my-4 mx-9 w-[80%] text-white font-bold bg-red-600"
          onClick={handledClick}
        >
          {checksign ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white py-1.5 my-2 mx-9 w-[50%] cursor-pointer w-1/2 border h-10"
          onClick={togglebtn}
        >
          {checksign ? "New To Netflix? Sign Up" : "Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
