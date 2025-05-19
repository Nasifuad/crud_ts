import Express from "express";
import cors from "cors";

const app = Express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(Express.json());

//demo for testing

app.route("/").get((req, res) => {
  res.send("Hello World!");
});

export default app;
