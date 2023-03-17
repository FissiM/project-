import { Outlet } from "react-router-dom";
import { RouterWrapper } from "../../routes/RouterWrapper";

import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

export const DashboardLayout = () => {
  return (
    <>
      <RouterWrapper isAuthenticationPage={false}>
        <Sidebar />

        <Main>
          <Outlet />
        </Main>
      </RouterWrapper>
    </>
  );
};
