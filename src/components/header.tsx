import Logo from "../assets/images/Logo.png";
import arrow_down from "../assets/images/arrow-down.svg";
import user from "../assets/images/user.svg";

import MobileDrawer from "./mobiledrawer";
import { LOGIN, REGISTER } from "../helpers/AppPaths";
import useRedirect from "../helpers/useNavigate";
const Header = () => {
  const redirect = useRedirect();

  return (
    <>
      {/* Desktop */}
      <header className="lg:grid hidden 2xl:w-[50%]  items-center w-[90%]  py-10 mx-auto  grid-cols-12">
        <div className="col-span-1">
          <a href="/">
            <img src={Logo} className="w-[76px]" alt="" />
          </a>
        </div>
        <div className="col-span-6 xl:pl-10 lg:pl-5">
          <ul className="flex font-NunitoMedium text-[20px] items-center justify-between">
            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </ul>
        </div>
        <div className="col-span-5">
          <ul className="max-w-md flex space-x-4 float-right	 space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li
              onClick={() => redirect(LOGIN)}
              className="flex gap-1 text-[#000000] text-[14px] items-center font-NunitoMedium pt-0"
            >
              Login
              <img src={user} alt="" />
            </li>
            <li>
              <button
                onClick={() => redirect(REGISTER)}
                className="bg-[#238CFF] ml-2 font-NunitoRegular text-[18px] text-[#ffffff] py-2 px-8 rounded-[50px]"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </header>
      {/* Mobile */}
      <header>
        <div className="grid lg:hidden grid-cols-12 items-center w-[90%]  py-6 mx-auto">
          <div className="col-span-2">
            <img src={Logo} className="w-[76px]" alt="" />
          </div>
          <div className="col-span-10">
            <MobileDrawer />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
