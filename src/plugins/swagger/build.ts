import Server from "../../server";
import fs from "fs";
const dir = "./docs";
const start = async () => {
  const server = await Server();
  try {
    await server.ready();
    !fs.existsSync(dir) && fs.mkdirSync(dir);
    fs.writeFileSync(`${dir}/swagger.yml`, server.swagger({ yaml: true }));
    console.log(server.swagger());
    server.log.info(`Documentation saved to ${dir}/swagger.yml`);
    process.exit();
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
