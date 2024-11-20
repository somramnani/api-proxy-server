const request = require("supertest");
const app = require("../index");
const server = require("../server");

// afterAll(() => {
//   server.close();
// });

describe("GET /hello", () => {
  it('should return a JSON response with message "hello"', async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "hello" });
  });
});
