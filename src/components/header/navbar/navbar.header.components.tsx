import logo from "../../../assets/Leo.png";
import NavItemsComponent from "./navitems.components";

const NavbarHeaderComponent = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} alt="organization_logo" />
            <span className="self-center text-lg sm:text-xl md:text-2xl font-bold whitespace-normal sm:whitespace-nowrap dark:text-white">
              Leo District Council 325M, Nepal
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavItemsComponent itemName="Home" link="/" />
              <NavItemsComponent itemName="About Us" link="/about-us" />
              <NavItemsComponent itemName="Clubs" link="/clubs" />
              <NavItemsComponent itemName="Resources" link="/resources" />
              <NavItemsComponent itemName="Gallery" link="/gallery" />
            </ul>
          </div>
          <button className="bg-teal-600 text-white py-2 px-4 font-bold rounded-md ">
            Donate
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarHeaderComponent;
