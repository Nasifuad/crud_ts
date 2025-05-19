import Router from "express";
import { authRoute } from "../moduels/auth/auth.route";
import { userRoute } from "../moduels/user/user.route";
const routes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];
const router = Router();
routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
