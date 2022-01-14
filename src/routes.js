import React from "react";
const Home = React.lazy(() => import("./views/Home/Home"));
const Settings = React.lazy(() => import("./views/setting"));
const Layout = React.lazy(() => import("./views/Layouts/Layout"));
const Login = React.lazy(() => import("./views/Login/Login"));
const Payment = React.lazy(() => import("./views/payment"));
const Registration = React.lazy(() =>
  import("./views/Registration/Registration")
);

export const layoutRoutes = [
  { path: "/payment", name: "Payment", component: Payment, exact: true },
  { path: "/", name: "Home", component: Home, exact: true },
  { path: "/settings", name: "Settings", component: Settings, exact: true },
];

const routes = [
  { path: "/login", name: "Login", component: Login, exact: true },
  { path: "/register", name: "Register", component: Registration, exact: true },
  { path: "/", name: "Dashboard", component: Layout },
];

export default routes;
