import { MongoClient } from "mongodb";
import config from "../config.js";

class CnxMongoDB {
  static client = null;
  static connection = false;
  static db = null;
  static usersCollection = null;
  static candyCollection = null;

  static conectar = async () => {
    try {
      console.log("Conectando a la base de datos");
      CnxMongoDB.client = new MongoClient(config.STRCNX);
      await CnxMongoDB.client.connect();
      console.log("Base de datos conectada");

      CnxMongoDB.db = CnxMongoDB.client.db(config.BASE);
      CnxMongoDB.usersCollection = CnxMongoDB.db.collection("users");
      CnxMongoDB.candyCollection = CnxMongoDB.db.collection("candy");
      CnxMongoDB.connection = true;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  static desconectar = async (_) => {
    if (!CnxMongoDB.connection) return;
    await CnxMongoDB.client.close();
    CnxMongoDB.connection = false;
  };
}

export default CnxMongoDB;
