import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupToken } from "./../state/authFeatures/signupSlice";

export const useToken = () => {
  // const dispatch = useDispatch();
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  const setToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
