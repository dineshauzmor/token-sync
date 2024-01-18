import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const Learn = lazy(() => import("./routes/learn"));
const Office = lazy(() => import("./routes/office"));
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
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
