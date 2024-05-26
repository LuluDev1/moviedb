import express from "express";
import ViteExpress from "vite-express";

const app = express();
const PORT = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
