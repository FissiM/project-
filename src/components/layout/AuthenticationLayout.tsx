import { Outlet } from "react-router-dom";
import { RouterWrapper } from "../../routes/RouterWrapper";

import { Main } from "./Main";

export const AuthenticationLayout = () => {
  return (
    <RouterWrapper isAuthenticationPage={true}>
      <Main>
        <Outlet />
      </Main>
    </RouterWrapper>
  );
};
