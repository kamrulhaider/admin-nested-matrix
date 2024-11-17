import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../../redux/features/loginActions";
import { setUserName, setPassword } from "../../redux/features/loginSlice";
import Button from "../../components/Button/Button";
import PasswordForm from "../../components/PasswordForm/PasswordForm";
import logo from "../../assets/visamind-color-logo.svg";
import loader from "../../assets/loader.json";
import Lottie from "lottie-react";

const Login = () => {
  const dispatch = useDispatch();
  const { username, password, loading, isLoggedIn } = useSelector(
    (state) => state.login
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="container mx-auto flex items-center justify-center h-screen">
        {loading ? (
          <Lottie
            style={{ height: "300px" }}
            animationData={loader}
            loop={true}
          />
        ) : (
          <div className=" bg-white  px-2 lg:w-1/3 lg:mx-0 mx-2 py-10 text-center ">
            {/* <img src={logo} alt="" className="w-1/2 mx-auto mb-4" /> */}
            <p className="mb-7 font-medium text-sm">
              Sign in to start your session
            </p>

            <form onSubmit={handleSubmit} className="mb-2">
              <div className="mb-4">
                <input
                  value={username}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onInput={(e) => dispatch(setUserName(e.target.value))}
                  placeholder="Enter Your Username"
                  required
                />
              </div>
              <PasswordForm
                password={password}
                required={true}
                onInput={(e) => dispatch(setPassword(e.target.value))}
                className={
                  "appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                }
                placeholder={"Password"}
              />

              <Button
                type={"submit"}
                name={"Login"}
                className={"primary-btn"}
              />
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
