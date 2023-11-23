import Model from "../model/DAOs/storeMongoDB.js";
import WeatherUtil from "../utils/weather.js";

class Service {
  constructor() {
    this.model = new Model();
    this.weatherUtil = new WeatherUtil();
  }

  getStore = async (id) => {
    if (await this.weatherUtil.isRaining()) {
      const store = await this.model.getStore();
      const items = await this.weatherUtil.makeDiscount(store);
      return items;
    } else {
      const items = await this.model.getStore(id);
      return items;
    }
  };

  createItem = async (item) => {
    const savedItem = await this.model.createItem(item);
    return savedItem;
  };

  editItem = async (item) => {
    const updatedItem = await this.model.editItem(item);
    return updatedItem;
  };

  deleteItem = async (id) => {
    const deletedItem = await this.model.deleteItem(id);
    return deletedItem;
  };
}

export default Service;
