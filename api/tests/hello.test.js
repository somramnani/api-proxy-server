const request = require("supertest");
const app = require("../index");
const server = require("../server");

afterAll(async () => {
  console.log("Closing server...");
  await new Promise((resolve) => server.close(resolve));
});

describe("GET /hello", () => {
  it('should return a JSON response with message "hello"', async () => {
    const response = await request(server).get("/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "hello" });
  });
});
