import express from "express";
import Controller from "../controller/users.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new Controller();
  }
  start() {
    this.router.get("/:id?", this.controller.getUsers);
    this.router.post("/", this.controller.createUser);
    this.router.put("/:id?", this.controller.editUser);
    this.router.delete("/:id", this.controller.deleteUser);

    return this.router;
  }
}

export default Router;
