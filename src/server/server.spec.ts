import type { FastifyInstance } from "fastify";
import Server from "./index";

let server: FastifyInstance;

describe("Server", () => {
  beforeEach(async () => {
    server = await Server();
  });

  it("tiene que devolver una variable definida", () => {
    expect(server).toBeDefined();
  });
});
