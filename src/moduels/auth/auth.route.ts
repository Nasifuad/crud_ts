import Router from "express";
import { getUser, signUp, verify } from "./auth.controller";
import verifyToken from "../../middleware/auth.middleware";

const router = Router();

router.get("/getusers", getUser);

router.get("/get-user", (req, res) => {
  res.send("This is the test route for the auth part");
});
router.get("/verify", verifyToken, verify);
router.post("/signup", signUp);

export const authRoute = router;
