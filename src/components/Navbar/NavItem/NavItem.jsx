import { Link } from "react-router-dom";

import MenuButton from "./NavItem.styled";

const NavItem = ({ menuItem }) => {
  const { menuName, path } = menuItem;

  return (
    <Link to={path}>
      <MenuButton type="button">{menuName}</MenuButton>
    </Link>
  );
};

export default NavItem;
