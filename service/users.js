import Model from "../model/DAOs/usersMongoDB.js";
import jsonwebtoken from "jsonwebtoken";

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

  editUser = async (user) => {
    const updatedUser = await this.model.editUser(user);
    return updatedUser;
  };

  deleteUser = async (id) => {
    const deletedUser = await this.model.deleteUser(id);
    return deletedUser;
  };

  loginUser = async (user) => {
    const userDb = await this.model.getUsers();
    const foundUser = userDb.find(
      (u) => u.email == user.email && u.password == user.password
    );
    if (foundUser) {
      const token = jsonwebtoken.sign(
        { email: user.email, rol: "admin" },
        "clave_secreta"
      );
      return token;
    }
  };
}

export default Service;
