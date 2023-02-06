import React from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "../nav.data";

interface MenuItem {
  path: string;
  label: string;
}
// text-sm/leading-5/font-semibold
const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <div className=" flex flex-row p-0 gap-[60px] items-start absolute h-[20px] left-[481px] top-[26px] ">
      {menuItems.map(({ path, label }: MenuItem, i) => (
        <div>
          <p
            className={`flex-none order-${i} grow-0 text-sm leading-5 ${
              location.pathname === path ? "font-bold" : ""
            }`}
          >
            <Link to={path} key={i}>
              {label}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
