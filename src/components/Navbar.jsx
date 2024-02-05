import { useTheme } from "@auzmor-test/ui";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const [currentColor, setCurrentColor] = useState(window.location.pathname === "/learn" ? "#ff3366" : "#10b981");
  useTheme({ primaryColor: currentColor });


  return (
    <>
      <NavbarWrapper>
        <div className="flex gap-3 flex-1">

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
        </div>

        <div className="cursor-pointer self-end text-lg flex gap-2">
          Primary Color: 
        <input
          type="color"
          id="favcolor"
          name="favcolor"
          onChange={(e) => setCurrentColor(e.target.value)}
          value={currentColor}
        />
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
  align-items: center;
  width: 100%;
`;
