import { useRoutes } from "react-router-dom";
import Home from "./pages/home page/Home";
import SignUp from "./pages/create account page/SignUp";
import Login from "./pages/login page/Login";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { useUser } from "./utils/useUser";

function App() {
  const user = useUser();

  const routes = useRoutes([
    {
      path: "/",
      element: <PrivateRoutes />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <h2>I am Profile</h2>,
        },
      ],
    },

    {
      path: "/auth",
      element: <SignUp />,

      children: [
        {
          path: "signup",
          element: <h1>Sign up</h1>,
        },
        {
          path: "login",
          element: <h1>Login</h1>,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
