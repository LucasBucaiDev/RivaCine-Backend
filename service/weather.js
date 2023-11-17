import axios from "axios";

class WeatherService {
  constructor() {
    this.apiKey = "183fdb7f975efa9d4f4054ede8bdb586";
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
  }

  async getWeather() {
    const city = "Buenos Aires";
    const url = `${this.baseURL}?q=${city}&appid=${this.apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(
        "Error al obtener datos del clima desde la API de OpenWeatherMap."
      );
    }
  }
}

export default WeatherService;
