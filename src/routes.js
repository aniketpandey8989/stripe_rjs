import React from "react";

const Layout = React.lazy(() => import("./views/Layout/Layout"));
const Login = React.lazy(() => import("./views/Login/Login"));
const Registration = React.lazy(() =>
  import("./views/Registration/Registration")
);

const ResetPassword = React.lazy(() =>
  import("./views/ResetPassword/ResetPassword")
);

const routes = [
  { path: "/", name: "Home", component: Layout, exact: true },
  { path: "/login", name: "Login", component: Login, exact: true },
  { path: "/register", name: "Register", component: Registration, exact: true },
  {
    path: "/resetPassword/:token",
    name: "Reset Password",
    component: ResetPassword,
    exact: true,
  },
];

export default routes;
