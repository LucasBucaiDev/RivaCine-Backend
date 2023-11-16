import { ObjectId } from "mongodb";
import CnxMongoDB from "../DBMongo.js";

class StoreModelMongoDB {
  constructor() {
    this.collectionName = "candy";
  }

  getStore = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];

    if (id) {
      const item = await CnxMongoDB.db
        .collection(this.collectionName)
        .findOne({ _id: new ObjectId(id) });
      return item;
    } else {
      const items = await CnxMongoDB.db
        .collection(this.collectionName)
        .find({})
        .toArray();
      return items;
    }
  };

  createItem = async (item) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    await CnxMongoDB.db.collection(this.collectionName).insertOne(item);
    return item;
  };

  editItem = async (item) => {
    if (!CnxMongoDB.connection) return item ? {} : [];
    const { _id, ...itemToUpdate } = item;
    const updatedItem = await CnxMongoDB.db
      .collection(this.collectionName)
      .updateOne({ _id: new ObjectId(item._id) }, { $set: itemToUpdate });

    return updatedItem;
  };

  deleteItem = async (id) => {
    if (!CnxMongoDB.connection) return id ? {} : [];
    const deletedItem = await this.getStore(id);
    await CnxMongoDB.db
      .collection(this.collectionName)
      .deleteOne({ _id: new ObjectId(id) });
    return deletedItem;
  };
}

export default StoreModelMongoDB;
