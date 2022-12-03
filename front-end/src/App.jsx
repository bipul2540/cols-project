import { useRoutes } from "react-router-dom";
import Home from "./pages/home page/Home";
import SignUp from "./pages/signup page/SignUp";
import Login from "./pages/login page/Login";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { useUser } from "./utils/useUser";
import AuthLandingPage from "./pages/AuthLandingPage";
import ResetPassword from "./pages/reset password page/ResetPassword";

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
      element: <AuthLandingPage />,
      children: [
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgot-password",
          element: <ResetPassword />,
        },

        {
          path: "reset-password",
          element: <h1>Hey this is reset page</h1>,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
