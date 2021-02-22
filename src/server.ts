import express from "express";

const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  return res.json({ message: "Hello World NLW04" });
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Server is running");
});
