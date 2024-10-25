import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/Leo.png";
import { NavLink } from "react-router-dom";

const FooterComponent = () => {
  return (
    <>
      <footer className="bg-[rgb(50,126,45)] shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
            <NavLink
              to="/"
              className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 sm:justify-start"
            >
              <img
                src={logo}
                className="h-16 md:h-20"
                alt="Leo District Council Logo"
              />
              <span className="self-center text-lg md:text-2xl lg:text-3xl text-white font-semibold whitespace-nowrap dark:text-white drop-shadow-lg">
                Leo District Council 325M, Nepal
              </span>
            </NavLink>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <p className="text-white font-bold">Stay Connected:</p>
              <div className="flex gap-2">
                <NavLink to="#">
                  <FaFacebook className="text-white text-2xl hover:text-teal-200" />
                </NavLink>
                <NavLink to="#">
                  <FaInstagram className="text-white text-2xl hover:text-teal-200" />
                </NavLink>
                <NavLink to="#">
                  <FaYoutube className="text-white text-2xl hover:text-teal-200" />
                </NavLink>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-xs md:text-sm font-bold text-white text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Leo District Council 325M, Nepal™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
