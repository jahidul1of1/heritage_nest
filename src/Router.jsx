import { Link, createBrowserRouter } from "react-router-dom";
import HasanHome from "./hasan/HasanHome";
import JahidulHome from "./jahidul/JahidulHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen w-full flex items-center justify-center gap-10">
        <Link to="hasan">Hasan</Link>
        <Link to="jahidul">Jahidul</Link>
      </div>
    ),
  },
  {
    path: "/hasan",
    element: <HasanHome />,
  },
  {
    path: "/jahidul",
    element: <JahidulHome />,
  },
]);
