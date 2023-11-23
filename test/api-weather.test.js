import { expect } from "chai";
import supertest from "supertest";
import Server from "../server.js";

describe("GET", () => {
  it("debería tener status 200", async () => {
    const server = new Server(8083);
    const app = await server.start();

    const request = supertest(app);
    const response = await request.get("/api/weather");

    expect(response.status).to.eql(200);
    console.log("API del clima funcionando correctamente");

    await server.stop();
  });
});
