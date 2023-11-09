import { MongoClient } from "mongodb";
import config from "../config.js";

class CnxMongoDB {
  static client = null;
  static connection = false;
  static db = null;

  static conectar = async () => {
    try {
      console.log("Conectando a la base de datos");
      CnxMongoDB.client = new MongoClient(config.STRCNX);
      await CnxMongoDB.client.connect();
      console.log("Base de datos conectada");

      CnxMongoDB.db = CnxMongoDB.client.db(config.BASE2);
      CnxMongoDB.connection = true;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  static desconectar = () => {};
}

export default CnxMongoDB;
