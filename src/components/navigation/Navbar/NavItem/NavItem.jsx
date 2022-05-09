import { Link } from "react-router-dom";

const NavItem = ({ menuItem }) => {
  const { menuName, path } = menuItem;

  return (
    <Link to={path}>
      <button type="button">{menuName}</button>
    </Link>
  );
};

export default NavItem;
