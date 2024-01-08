import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Learn from "./routes/learn";
import Office from "./routes/office";
import Ats from "./routes/ats";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
