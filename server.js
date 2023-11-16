import express from "express";
import RouterUsers from "./router/users.js";
import RouterStore from "./router/store.js";
import config from "./config.js";
import CnxMongoDB from "./model/DBMongo.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static("public"));

app.use("/api/users", new RouterUsers().start());
app.use("/api/store", new RouterStore().start());

if (config.MODO_PERSISTENCIA == "MONGODB") {
  await CnxMongoDB.conectar();
}

const PORT = config.PORT;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en http://localhost:${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
