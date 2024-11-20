const request = require("supertest");
const app = require("../index");
const server = require("../server");

afterAll(async () => {
  console.log("Closing server...");
  await new Promise((resolve) => server.close(resolve));
});

describe("GET /", () => {
  it("should return a welcome message with a link to the documentation", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Welcome to Som's API Proxy Server");
    expect(response.text).toContain(
      "https://github.com/somramnani/api-proxy-server"
    );
  });
});
