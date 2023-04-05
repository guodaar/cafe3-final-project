import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { Suspense, useContext } from "react";
import { authLayoutRoutes, mainLayoutRoutes } from "./consts";

import Loader from "../components/Loader/Loader";
import { UserContext } from "../contexts/userContext";

const Routes = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { Layout, routes } = isLoggedIn ? mainLayoutRoutes : authLayoutRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Suspense fallback={<Loader isLoading={true} />}>
                <Component />
              </Suspense>
            </Layout>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <Layout>
            <Navigate to={{ pathname: "/" }} />
          </Layout>
        }
      />
    </RoutesWrapper>
  );
};

export default Routes;
