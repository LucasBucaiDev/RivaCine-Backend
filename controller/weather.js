import WeatherService from "../service/weather.js";

class WeatherController {
  constructor() {
    this.service = new WeatherService();
  }

  getWeatherData = async (req, res) => {
    try {
      const weatherData = await this.service.getWeather();
      res.json(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          "Error al obtener datos del clima desde la API de OpenWeatherMap.",
      });
    }
  };
}

export default WeatherController;
