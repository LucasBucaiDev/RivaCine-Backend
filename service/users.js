import Model from "../model/DAOs/usersMongoDB.js";

class Service {
  constructor() {
    this.model = new Model();
  }

  getUsers = async (id) => {
    const users = await this.model.getUsers(id);
    return users;
  };

  createUser = async (user) => {
    const savedUser = await this.model.createUser(user);
    return savedUser;
  };

  editUser = async (id, user) => {
    const updatedUser = await this.model.editUser(id, user);
    return updatedUser;
  };

  deleteUser = async (id) => {
    const deletedUser = await this.model.deleteUser(id);
    return deletedUser;
  };
}

export default Service;
