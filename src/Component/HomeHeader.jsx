import { useNavigate } from "react-router-dom";
import DarkSwitcher from "../DarkSwitcher";
import background from "../Image/background.jpg";

function HomeHeader(props) {
  let Nav = useNavigate();
  const handleLogout = () => {
    Nav("/");
  };
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center w-full"
    >
      <div className="flex justify-between ">
        <DarkSwitcher />
        <button
          onClick={handleLogout}
          className="bg-black-750 opacity-65 p-2 w-12 rounded-full -translate-x-6 translate-y-2 dark:text-amber-200 dark:bg-teal-750"
        >
          <i className="bx bx-log-out"></i>
        </button>
      </div>
      <div className="flex justify-around mb-4">
        <div className="p-2 w-40 border-4 border-amber-200 rounded-lg bg-black-750 text-teal-750 sm:hover:scale-105 hover:scale-100 duration-700 dark:bg-teal-750 dark:opacity-80 dark:border-green-150 dark:text-amber-200">
          <p>Incomes</p>
          <p>{props.incomes}$</p>
        </div>
        <div className="p-2 w-40 border-4 border-amber-200 rounded-lg bg-black-750 text-teal-750 sm:hover:scale-105 hover:scale-100 duration-700 dark:bg-teal-750 dark:opacity-80 dark:border-green-150 dark:text-amber-200">
          <p>Wallet </p>
          <p>{props.wallet}$</p>
        </div>
        <div className="p-2 w-40 border-4 border-amber-200 rounded-lg bg-black-750 text-teal-750 sm:hover:scale-105 hover:scale-100 duration-700 dark:bg-teal-750 dark:opacity-80 dark:border-green-150 dark:text-amber-200">
          <p>Costs</p>
          <p>{props.costs}$</p>
        </div>
      </div>
    </div>
  );
}
export default HomeHeader;
