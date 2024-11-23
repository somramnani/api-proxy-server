const request = require("supertest");
const axios = require("axios");
jest.mock("axios");
const app = require("../index");

describe("GET /super-hero-api/:data", () => {
  it("should return superhero data when the external API responds successfully", async () => {
    const mockResponse = {
      data: {
        results: [
          {
            id: "620",
            name: "Spider-Man",
            powerstats: {
              intelligence: "90",
              strength: "55",
              speed: "67",
              durability: "75",
              power: "74",
              combat: "85",
            },
          },
        ],
      },
    };

    axios.mockResolvedValue(mockResponse);

    const response = await request(app).get("/super-hero-api/Spider-Man");

    // Assertions
    console.log(response.body.results);
    expect(response.status).toBe(200);
    expect(response.body.results[0].name).toBe("Spider-Man");
  });
});
