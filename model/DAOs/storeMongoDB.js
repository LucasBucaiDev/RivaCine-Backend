import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongoStore.js";

class ModelMongoDB {

   getStore = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    if (id) {
      const producto = await CnxMongoDB.db
        .collection("tienda")
        .findOne({ _id: new ObjectId(id) });
      return producto;
    } else {
      const productos = await CnxMongoDB.db
        .collection("tienda")
        .find({})
        .toArray();
      return productos;
    }
  };

  createItem = async (producto) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    await CnxMongoDB.db.collection("tienda").insertOne(producto);
    return producto;
  };

  editItem = async (id, producto) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    await CnxMongoDB.db
      .collection("tienda")
      .updateOne({ _id: new ObjectId(id) }, { $set: producto });

    const productoActualizado = await this.getStore(id);

    return productoActualizado;
  };

  deleteItem = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    const productoBorrado = await this.getStore(id);
    await CnxMongoDB.db
      .collection("tienda")
      .deleteOne({ _id: new ObjectId(id) });
    return productoBorrado;
  };
}

export default ModelMongoDB;
