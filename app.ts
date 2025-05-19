import Express from "express";
import cors from "cors";
import router from "./src/route/root.route";
import cookieParser from "cookie-parser";
const app = Express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(Express.json());
app.use(cookieParser());
//demo for testing

app.route("/").get((req, res) => {
  res.send("This is the test route for the backend");
});

//core root routing path

app.use("/api", router);

export default app;
