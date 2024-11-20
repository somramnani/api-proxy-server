const request = require("supertest");
const app = require("../index");
const server = require("../server");

afterAll(() => {
  server.close();
});

describe("GET /", () => {
  it("should return a welcome message with a link to the documentation", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Welcome to Som's API Proxy Server");
    expect(response.text).toContain(
      "https://github.com/somramnani/api-proxy-server"
    );
  });
});
