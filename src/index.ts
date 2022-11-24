import Server from "./Presentation/server";

const start = async () => {
  const server = await Server();
  await server.ready();

  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();
