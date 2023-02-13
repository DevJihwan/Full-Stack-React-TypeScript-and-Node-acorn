import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("First middlware.");
  throw new Error("A Failure occureed!");
});

app.use(router);
router.get("/a", (req, res, next) => {
  res.send("Hello this is route a");
});

router.post("/c", (req, res, next) => {
  res.send(`Hello this is route c. Message is ${req.body.message}`);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log("Express Node Server has loaded!");
});
