import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <div>About</div> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
