import Service from "../service/store.js";

class Controller {
  constructor() {
    this.service = new Service();
  }

  getStore = async (req, res) => {
    const { id } = req.params;
    const users = await this.service.getStore(id);
    res.json(users);
  };

  createItem = async (req, res) => {
    const { body: user } = req;
    const savedUser = await this.service.createItem(user);
    res.json(savedUser);
  };

  editItem = async (req, res) => {
    const item = req.body;
    const updatedItem = await this.service.editItem(item);
    res.json(updatedItem);
  };

  deleteItem = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await this.service.deleteItem(id);
    res.json(deletedUser);
  };
}

export default Controller;
