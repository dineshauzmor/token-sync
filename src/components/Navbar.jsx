import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <div className="text-lg font-medium">Design System</div>
        <Link className="text-lg cursor-pointer" to="/learn">
          Learn
        </Link>
        <Link className="text-lg cursor-pointer" to="/office">
          Office
        </Link>
      </NavbarWrapper>
      <Outlet />
    </>
  );
}

const NavbarWrapper = styled.nav`
  background-color: grey;
  display: flex;
  gap: 10px;
  padding: 10px;
  color: white;
  margin-bottom: 20px;
  align-items: center;
`;
