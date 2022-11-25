import { createServer } from "../../server";
import fs from "fs";
const dir = "./docs";
const start = async () => {
  const server = await createServer();
  try {
    await server.ready();
    !fs.existsSync(dir) && fs.mkdirSync(dir);
    fs.writeFileSync(
      `${dir}/swagger.json`,
      JSON.stringify(server.swagger(), null, 2)
    );
    server.log.info(`Documentation saved to ${dir}/swagger.yml`);
    process.exit();
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
