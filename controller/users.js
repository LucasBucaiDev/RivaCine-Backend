import Service from "../service/users.js";

class Controller {
  constructor() {
    this.service = new Service();
  }

  getUsers = async (req, res) => {
    const { id } = req.params;
    const users = await this.service.getUsers(id);
    res.json(users);
  };

  createUser = async (req, res) => {
    const { body: user } = req;
    const savedUser = await this.service.createUser(user);
    res.json(savedUser);
  };

  editUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await this.service.editUser(id, user);
    res.json(updatedUser);
  };

  deleteUser = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await this.service.deleteUser(id);
    res.json(deletedUser);
  };

  loginUser = async (req, res) => {
    const user = req.body;
    const loggedUser = await this.service.loginUser(user);
    res.json(loggedUser);
  };
}

export default Controller;
