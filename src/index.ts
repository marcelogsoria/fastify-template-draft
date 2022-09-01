import Server from "./server";

const start = async () => {
  const server = await Server();
  await server.ready();
  console.log(server.swagger({ yaml: true }));
  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

start();
