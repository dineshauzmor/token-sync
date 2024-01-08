import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Learn from "./routes/learn";
import Office from "./routes/office";
import Ats from "./routes/ats";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Design System POC</div>,
    },
    {
      path: "/learn",
      element: <Learn />,
    },
    {
      path: "/office",
      element: <Office />,
    },
    {
      path: "/ats",
      element: <Ats />,
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;

// const StyledButton = styled(Button)`
//   /* background-color: purple; */
//   border-radius: var(--aldo2);
//   border: none;
// `;

// const Text = styled.span`
//   font: var(--textBaseFontMedium);
//   color: var(--colorsBaseWhite);
// `;
