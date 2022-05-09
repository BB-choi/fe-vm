import Navbar from "components/navigation/Navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
