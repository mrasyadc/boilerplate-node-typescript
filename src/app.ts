import express from "express";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("The next hyena ate the antelope!" + req.ip);
});
app.listen(port, () => {
  console.log(`[server] server dimulai di http://localhost:${port} ⚡`);
});
