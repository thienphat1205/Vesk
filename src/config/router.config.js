import { lazy } from "react";
import BasicLayout from "../layout/BasicLayout";
import LoginLayout from "../layout/LoginLayout";
// import Home from "../pages/Home";
import Notfound from "../pages/404Page";
// import Users from "../pages/User";
import ReviewUser from "../pages/User/ReviewUser";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ForgotPassword from "../pages/ForgotPassword";
// import Contact from "../pages/Contact";
const Contact = lazy(() => import("../pages/Contact"));
const Home = lazy(() => import("../pages/Home"));
const Users = lazy(() => import("../pages/User"));
const Profile = lazy(() => import("../pages/Profile"));

const routes = [
  {
    path: "/",
    exact: true,
    layout: BasicLayout,
    component: Home
  },
  {
    path: "/users",
    exact: true,
    layout: BasicLayout,
    component: Users
  },
  {
    path: "/users/:id",
    exact: false,
    layout: BasicLayout,
    component: ReviewUser
  },
  {
    path: "/contact",
    exact: false,
    layout: BasicLayout,
    component: Contact
  },
  {
    path: "/profile",
    exact: false,
    layout: BasicLayout,
    component: Profile
  },
  {
    path: "/signin",
    exact: true,
    layout: LoginLayout,
    component: SignIn
  },
  {
    path: "/signup",
    exact: true,
    layout: LoginLayout,
    component: SignUp
  },
  {
    path: "/forgot-password",
    exact: true,
    layout: LoginLayout,
    component: ForgotPassword
  },
  {
    path: "",
    exact: false,
    layout: BasicLayout,
    component: Notfound
  }
];

export default routes;
