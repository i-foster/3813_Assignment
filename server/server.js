// server/index.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS for all requests
app.use(cors());

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Create the HTTP server and attach the Express app to it
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (data) => {
    console.log("Received message:", data);
    io.emit("message", data); // Broadcasting the message
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
