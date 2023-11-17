import express from "express";
import WeatherController from "../controller/weather.js";

class WeatherRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new WeatherController();
  }

  start() {
    this.router.get("/", this.controller.getWeatherData);

    return this.router;
  }
}

export default WeatherRouter;
