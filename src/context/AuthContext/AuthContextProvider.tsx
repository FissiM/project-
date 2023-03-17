import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

type Props = {
  children: React.ReactNode;
};

type AuthContextValues = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storageValue = localStorage.getItem("authenticated");
    return storageValue != null;
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("authenticated", JSON.stringify(true));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  return { isAuthenticated, login: handleLogin, logout: handleLogout };
};

export const AuthContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticated, login, logout } = useAuth();

  const isAuthRoute = (path: string) =>
    path === "/" || path === "/posts" || path === "/products";

  const isPublicRoute = (path: string) =>
    path === "/login" || path === "/sign-up" || path === "/forgot-password";

  useEffect(() => {
    if (isAuthenticated && isPublicRoute(pathname)) {
      navigate({ pathname: "/" });
    } else if (!isAuthenticated && isAuthRoute(pathname)) {
      navigate({ pathname: "/login" });
    }
  }, [isAuthenticated, pathname, navigate]);

  const contextValues: AuthContextValues = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthProvider value={contextValues}>{children}</AuthProvider>;
};
