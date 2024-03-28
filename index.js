const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1778317",
  key: "ff81d0e63a3543810af2",
  secret: "cb757b19fc7eee38ad54",
  cluster: "ap2",
  useTLS: true,
});

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:4200",
    ],
  })
);

app.use(express.json());


app.post("/api/messages", async (req, res) => {
  await pusher.trigger("chat", "message", {
    username: req.body.username,
    message: req.body.message,
  });

  res.json([]);
});

app.listen(PORT, () => console.log(`listening on post: ${PORT}`));
