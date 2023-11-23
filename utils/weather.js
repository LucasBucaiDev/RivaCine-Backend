import WeatherService from "../service/weather.js";

class WeatherUtils {
  constructor() {
    this.weatherService = new WeatherService();
  }

  getWeatherData = async () => {
    try {
      const weatherData = await this.weatherService.getWeather();
      return weatherData;
    } catch (error) {
      console.error(error);
    }
  };

  isRaining = async () => {
    try {
      const weatherData = await this.getWeatherData();
      const rainingConditions = ["Rain", "Drizzle", "Thunderstorm"];
      const isRaining = rainingConditions.includes(weatherData.weather[0].main);

      return isRaining;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  makeDiscount = async (storeItems) => {
    let discount = 0.8;
    const discountedList = storeItems.map((item) => {
      const discountedPrice = item.precio * discount;
      const discountedItem = {
        ...item,
        precio: discountedPrice,
      };
      return discountedItem;
    });
    return discountedList;
  };
}

export default WeatherUtils;
