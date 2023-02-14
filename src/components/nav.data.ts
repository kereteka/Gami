interface MenuItem {
  path: string;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    path: "/home",
    label: "Home",
  },
  {
    path: "/whatwedo",
    label: "What We Do",
  },
  {
    path: "/gamistatistics",
    label: "GAMI Statistics",
  },
  {
    path: "/contactus",
    label: "Contact Us",
  },
];

export default menuItems;
