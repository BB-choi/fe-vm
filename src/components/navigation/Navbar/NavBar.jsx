import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const Menus = ({ data }) => {
  return data.map((item) => <NavItem menuItem={item} key={item.id} />);
};

const Navbar = ({ menusData }) => {
  return (
    <Wrapper>
      <Menus data={menusData} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Navbar;
