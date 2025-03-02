const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });
const PORT = process.env.PORT || 5001;

io.on("connection", (socket) => {
  console.log("New user connected");
  socket.on("chatMessage", (msg) => io.emit("chatMessage", msg));
  socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));