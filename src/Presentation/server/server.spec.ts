import type { FastifyInstance } from "fastify";
import { createServer } from "./index";

let server: FastifyInstance;

describe("Server", () => {
  beforeEach(async () => {
    //server = await Server();
  });

  it("tiene que devolver una variable definida", async () => {
    server = await createServer();
    expect(server).toBeDefined();
  });
});
