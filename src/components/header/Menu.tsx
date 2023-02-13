import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "../nav.data";

interface MenuItem {
  path: string;
  label: string;
}
const Menu: React.FC = () => {
  const location = useLocation();
  const labelRef = useRef<HTMLLIElement>(null);

  return (
    <>
      <ul className=" hidden sm:flex h-auto ml-6 font-light  ">
        {menuItems.map(({ path, label }: MenuItem, i) => (
          <li
            key={i}
            ref={labelRef}
            title={label}
            className={`
             px-2 h-[50px] mt-[29px] ${
               location.pathname === path ||
               (location.pathname === "/" && label === "Home")
                 ? " border-b border-gray-100 relative before:absolute before:-left-[11px] before:text-transparent before:content-['ab'] before:border-b before:mt-[25px] before:border-gray-200 before:border-r before:rounded-br-xl z-50"
                 : ""
             } `}
          >
            <Link to={path} key={i}>
              <p
                title={label}
                className={` h-[50px] leading-5  sm:px-1 md:px-2 lg:px-8 flex-none order-${i} grow-0 text-sm -mt-3 before:block before:font-bold before:overflow-hidden before:text-transparent before:content-[attr(title)] ${
                  location.pathname === path ||
                  (location.pathname === "/" && label === "Home")
                    ? "font-semibold border-l border-t border-l-gray-200  border-t-gray-200 border-r border-r-gray-200 rounded-t-xl relative after:absolute after:left-[100%]  after:text-transparent after:content-['ab'] after:border-b after:mt-[20px] after:border-gray-200 after:border-l after:rounded-bl-xl"
                    : " "
                }`}
              >
                {label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
