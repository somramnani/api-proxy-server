const request = require("supertest");
const app = require("../index");

// let server;

// beforeAll(async () => {
//   server = app.listen(3001, () => {
//     console.log("Server started on port 3001");
//   });
// });

// afterAll(async () => {
//   console.log("Closing server...");
//   await new Promise((resolve) => server.close(resolve));
// });
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
