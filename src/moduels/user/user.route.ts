import Router from "express";

const router = Router();

router.route("/get-user").get((req, res) => {
  res.send("This is the test route for the USER part");
});

export const userRoute = router;
