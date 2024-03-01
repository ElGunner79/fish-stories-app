import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Videos from "./pages/Videos";
import Playback from "./pages/Playback";
import Catchmap from "./pages/Catchmap";
import Upload from "./pages/Upload";
import Addlocation from "./pages/Addlocation";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/signup", element: <Signup /> },
      { path: "/videos", element: <Videos /> },
      { path: "/playback", element: <Playback /> },
      { path: "/catchmap", element: <Catchmap /> },
      { path: "/upload", element: <Upload /> },
      { path: "/addlocation", element: <Addlocation /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;