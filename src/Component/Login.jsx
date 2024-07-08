import DarkSwitcher from "../DarkSwitcher";
import background from "../Image/background.jpg";
import loginPic from "../Image/loginPic.jpg";
import Form from "./Form";
function Login() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center w-full h-screen "
    >
      <div className="flex justify-center flex-col h-screen">
        <DarkSwitcher />
        <div className="flex flex-col justify-center items-center w-full">
          <img
            src={loginPic}
            className="w-4/6 sm:w-1/3  shadow-xl shadow-slate-900 rounded-t-lg"
          />
          <div className="bg-amber-50 dark:bg-zinc-800 w-4/6 sm:w-1/3   shadow-xl shadow-slate-900 opacity-65 rounded-b-lg ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
