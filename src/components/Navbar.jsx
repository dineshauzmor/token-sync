import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <div className="text-lg font-medium">Design System</div>
        <div
          className="text-lg cursor-pointer"
          onClick={() => {
            window.location.href = "/learn";
          }}
        >
          Learn
        </div>
        <div
          className="text-lg cursor-pointer"
          onClick={() => {
            window.location.href = "/office";
          }}
        >
          Office
        </div>
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
