import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext/AuthContext";

interface Props {
  children: React.ReactNode;
  isAuthenticationPage: boolean;
}

export const RouterWrapper = ({ isAuthenticationPage, children }: Props) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticationPage && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!isAuthenticationPage && !isAuthenticated) {
    return <Navigate to="login" replace />;
  }

  return <>{children}</>;
};
