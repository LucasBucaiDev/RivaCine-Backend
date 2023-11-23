import { expect } from "chai";
import supertest from "supertest";
import generator from "./generator/user.js";
import Server from "../server.js";

describe("POST", () => {
  it("debería iniciar sesión y devolver un token JWT", async () => {
    const server = new Server(8081);
    const app = await server.start();

    const request = supertest(app);

    const existingUser = {
      email: "mongotest@gmail.com",
      password: "1234",
    };
    console.log(existingUser);

    const response = await request.post("/api/users/login").send(existingUser);

    const token = response.body;
    expect(token).to.not.be.undefined;
    console.log(`Token JWT: ${token}`);

    await server.stop();
  });

  it("debería fallar el inicio de sesión", async () => {
    const server = new Server(8082);
    const app = await server.start();

    const request = supertest(app);

    const user = generator.user;
    console.log(user);

    const response = await request.post("/api/users/login").send(user);
    expect(response.body).to.be.null;
    console.log(`Token (No existe): ${response.body}`);

    await server.stop();
  });
});
