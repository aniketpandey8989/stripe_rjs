import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { layoutRoutes } from "../../routes";
import Sidebar from "../sidebar";

export default function Layout() {
  return (
    <main class="flex">
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {layoutRoutes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
        </Switch>
      </Suspense>
    </main>
  );
}
