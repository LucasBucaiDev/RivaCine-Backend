import express from "express";
import RouterUsers from "./router/users.js";
import RouterStore from "./router/store.js";
import RouterWeather from "./router/weather.js";
import CnxMongoDB from "./model/DBMongo.js";
import cors from "cors";

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.server = null;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    this.app.use("/api/weather", new RouterWeather().start());
    this.app.use("/api/users", new RouterUsers().start());
    this.app.use("/api/store", new RouterStore().start());

    await CnxMongoDB.conectar();

    const PORT = this.port;
    this.server = this.app.listen(PORT, () =>
      console.log(`Servidor express escuchando en http://localhost:${PORT}`)
    );
    this.server.on("error", (error) =>
      console.log(`Error en servidor: ${error.message}`)
    );

    return this.app;
  }

  async stop() {
    if (this.server) {
      this.server.close();
      await CnxMongoDB.desconectar();
      this.server = null;
    }
  }
}

export default Server;
