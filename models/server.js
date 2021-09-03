const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controller");

class Server {
  constructor() {
    this.app = express();
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.port = process.env.PORT;

    // Endpoints
    this.routePath = {};

    //middlewares
    this.middlewares();
    this.routes();
    this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.routePath.auth, require("../routes/auth"));
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(
        `Servidor corriendo en la ruta http://localhost:${this.port}`
      );
    });
  }
}

module.exports = Server;
