import Navbar from "components/navigation/Navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = ({ menusData }) => {
  return (
    <>
      <nav>
        <Navbar menusData={menusData} />
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
