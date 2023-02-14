import React from "react";
import { Link } from "react-router-dom";
import menuItems from "../nav.data";

interface MenuItem {
  path: string;
  label: string;
}
const Menu: React.FC = () => {
  return (
    <ul className=" hidden sm:flex justify-between w-[40%] h-auto ml-6 font-light">
      {menuItems.map(({ path, label }: MenuItem, i) => (
        <li
          key={i}
          title={label}
          className={`inline-block leading-5 flex-none text-center order-${i} grow-0 text-sm after:block after:font-bold after:overflow-hidden after:invisible after:content-[attr(title)]`}
        >
          <Link to={path} key={i}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
