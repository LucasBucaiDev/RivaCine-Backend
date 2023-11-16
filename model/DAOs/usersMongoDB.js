import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongo.js";

class UserModelMongoDB {
  constructor() {
    this.collectionName = "users";
  }

  getUsers = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];

    if (id) {
      const usuario = await CnxMongoDB.db
        .collection(this.collectionName)
        .findOne({ _id: new ObjectId(id) });
      return usuario;
    } else {
      const usuarios = await CnxMongoDB.db
        .collection(this.collectionName)
        .find({})
        .toArray();
      return usuarios;
    }
  };

  createUser = async (user) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    await CnxMongoDB.db.collection(this.collectionName).insertOne(user);
    return user;
  };

  editUser = async (usuario) => {
    if (!CnxMongoDB.connection) return usuario ? {} : [];
    const { _id, ...usuarioParaActualizar } = usuario;
    const usuarioActualizado = await CnxMongoDB.db
      .collection(this.collectionName)
      .updateOne(
        { _id: new ObjectId(usuario._id) },
        { $set: usuarioParaActualizar }
      );

    return usuarioActualizado;
  };

  deleteUser = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    const usuarioBorrado = await this.getUsers(id);
    await CnxMongoDB.db
      .collection(this.collectionName)
      .deleteOne({ _id: new ObjectId(id) });
    return usuarioBorrado;
  };
}

export default UserModelMongoDB;
