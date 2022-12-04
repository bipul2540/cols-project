import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/home page/Home";
import SignUp from "./pages/signup page/SignUp";
import Login from "./pages/login page/Login";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { useUser } from "./utils/useUser";
import AuthLandingPage from "./pages/AuthLandingPage";
import ResetPassword from "./pages/reset password page/ResetPassword";
import { useNavigate } from "react-router-dom";

import UserAlreadyLoggedIn from "./pages/UserAlreadyLoggedIn";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const navigate = useNavigate();
  const user = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (user) {
    useEffect(() => {
      setIsAuthenticated(user.isVerified);
    }, []);
  }
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path='/' index element={<Home />} />
        </Route>

        {/* AUTH ROUTING  */}
        <Route path='/auth' element={<AuthLandingPage />}>
          <Route
            index
            path='signup'
            element={isAuthenticated ? <UserAlreadyLoggedIn /> : <SignUp />}
          />
          <Route
            path='login'
            element={isAuthenticated ? <UserAlreadyLoggedIn /> : <Login />}
          />

          <Route path='forgot-password' element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
