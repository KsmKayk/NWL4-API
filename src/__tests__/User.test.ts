import request from "supertest";
import { app } from "../app";
import createConnection from "../database";

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      name: "User Example",
      email: "User@Exemple.com",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should not be able to create a new user if the user email is already in using", async () => {
    const response = await request(app).post("/users").send({
      name: "User Example",
      email: "User@Exemple.com",
    });
    expect(response.status).toBe(400);
  });
});
