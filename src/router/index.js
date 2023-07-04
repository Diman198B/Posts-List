import About from "../screens/About";
import Login from "../screens/Login";
import Notfound from "../screens/Notfound";
import PostIdPage from "../screens/PostIdPage";
import Posts from "../screens/Posts";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
  { path: "/notfound", component: Notfound, exact: true },
];

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];
