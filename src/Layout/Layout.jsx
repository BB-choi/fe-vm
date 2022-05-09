import Navbar from "components/navigation/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ menusData }) => {
  return (
    <Wrap>
      <nav className="gnb">
        <Navbar menusData={menusData} />
      </nav>

      <Main>
        <Outlet />
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
  width: 80rem;
  min-height: 100vh;

  .gnb {
    margin: 3rem 0 1rem;
    text-align: center;
  }
`;

const Main = styled.main``;

export default Layout;
