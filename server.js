const express = require("express");

const routerUsers = require("./router/users");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/users", routerUsers);

const PORT = 5432;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en el puerto: ${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
