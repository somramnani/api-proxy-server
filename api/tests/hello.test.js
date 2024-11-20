const request = require("supertest");
const app = require("../index");
// const server = require("../server");

// afterAll(async () => {
//   console.log("Closing server...");
//   await new Promise((resolve) => server.close(resolve));
// });

let server;

beforeAll(async () => {
  server = app.listen(3001, () => {
    console.log("Server started on port 3001");
  });
});

afterAll(async () => {
  console.log("Closing server...");
  await new Promise((resolve) => server.close(resolve)); // Wait for the server to shut down
});

describe("GET /hello", () => {
  it('should return a JSON response with message "hello"', async () => {
    const response = await request(server).get("/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "hello" });
  });
});
