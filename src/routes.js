import React from "react";

const Home = React.lazy(() => import("./views/Home/Home"));
const Layout = React.lazy(() => import("./views/Layouts/Layout"));
const Login = React.lazy(() => import("./views/Login/Login"));
const Settings = React.lazy(() => import("./views/setting"));
const Payment = React.lazy(() => import("./views/payment"));
const Registration = React.lazy(() =>
  import("./views/Registration/Registration")
);

const ResetPassword = React.lazy(() =>
  import("./views/ResetPassword/ResetPassword")
);


export const layoutRoutes = [
  { path: "/payment", name: "Payment", component: Payment,  exact: true },
  { path: "/settings", name: "settings", component: Settings,  exact: true },
  { path: "/", name: "Home", component: Home,  exact: true },
]

const routes = [
  { path: "/login", name: "Login", component: Login, exact: true },
  { path: "/register", name: "Register", component: Registration, exact: true },
  {
    path: "/resetPassword/:token",
    name: "Reset Password",
    component: ResetPassword,
    exact: true,
  },
  
  { path: "/", name: "Dashboard", component: Layout },
];

export default routes;
