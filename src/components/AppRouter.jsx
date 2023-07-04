import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import Loader from "./UI/Loader/Loader";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Loader />
      </div>
    );
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
