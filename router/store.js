import express from "express";
import Controller from "../controller/store.js";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new Controller();
  }
  start() {
    this.router.get("/:id?", this.controller.getStore);
    this.router.post("/", this.controller.createItem);
    this.router.put("/:id?", this.controller.editItem);
    this.router.delete("/:id", this.controller.deleteItem);

    return this.router;
  }
}

export default Router;
