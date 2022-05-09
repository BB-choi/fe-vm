import menus from "stores/menus";
import NavItem from "./NavItem/NavItem";

const menuItems = menus;
const Navbar = () => {
  return menuItems.map((menuItem) => (
    <NavItem menuItem={menuItem} key={menuItem.id} />
  ));
};

export default Navbar;
