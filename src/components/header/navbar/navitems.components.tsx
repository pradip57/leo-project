import { NavLink } from "react-router-dom";

export type NavItemsComponetProps = {
  link: string;
  itemName: string;
};

const NavItemsComponent = ({ link, itemName }: NavItemsComponetProps) => {
  return (
    <>
      <li>
        <NavLink
          to={link}
          className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          aria-current="page"
        >
          {itemName}
        </NavLink>
      </li>
    </>
  );
};

export default NavItemsComponent;
