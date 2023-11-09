import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongo.js";

class ModelMongoDB {

  getUsers = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    if (id) {
      const producto = await CnxMongoDB.db
        .collection("users")
        .findOne({ _id: new ObjectId(id) });
      return producto;
    } else {
      const productos = await CnxMongoDB.db
        .collection("users")
        .find({})
        .toArray();
      return productos;
    }
  };

  createUser = async (user) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    await CnxMongoDB.db.collection("users").insertOne(user);
    return user;
  };

  editUser = async (id, producto) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    await CnxMongoDB.db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: producto });

    const productoActualizado = await this.getUsers(id);

    return productoActualizado;
  };

  deleteUser = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    const productoBorrado = await this.getUsers(id);
    await CnxMongoDB.db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });
    return productoBorrado;
  };
}

export default ModelMongoDB;
