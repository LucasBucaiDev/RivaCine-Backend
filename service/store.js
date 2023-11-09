import Model from "../model/DAOs/storeMongoDB.js";

class Service {
  constructor() {
    this.model = new Model();
  }

  getStore = async (id) => {
    const users = await this.model.getStore(id);
    return users;
  };

  createItem = async (user) => {
    const savedUser = await this.model.createItem(user);
    return savedUser;
  };

  editItem = async (id, user) => {
    const updatedUser = await this.model.editItem(id, user);
    return updatedUser;
  };

  deleteItem = async (id) => {
    const deletedUser = await this.model.deleteItem(id);
    return deletedUser;
  };
}

export default Service;
