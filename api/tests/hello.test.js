const request = require("supertest");
const app = require("../index");

let server;

beforeAll(async () => {
  server = app.listen(3001, () => {
    console.log("Server started on port 3001");
  });
});

afterAll(async () => {
  if (server) {
    console.log("Closing server...");
    await new Promise((resolve) => server.close(resolve));
  }
});

describe("GET /hello", () => {
  it('should return a JSON response with message "hello"', async () => {
    const response = await request(server).get("/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "hello" });
  });
});
