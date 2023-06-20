import { Sequelize } from "sequelize";
import config from "../config/config.js";

const sequelize = new Sequelize(config.database, config.user, config.pass, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
});

// try {
//   await sequelize.authenticate();
//   console.log("thành công");
// } catch {
//   console.log("thất bại");
// }

export default sequelize;

// sequelize-auto -h localhost -d db_food -u root -x 080201010723 -p 3306  --dialect mysql  -o src/model -l esm
