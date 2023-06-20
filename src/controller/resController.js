import { Sequelize } from "sequelize";
import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";
import { errorCode, successCode } from "../config/response.js";

const models = initModels(sequelize);

const Op = Sequelize.Op;
const getLikeOfRes = async (req, res) => {
  let { res_id } = req.params;
  try {
    let data = await models.restaurant.findAll({
      include: ["user_id_users"],
      where: {
        res_id,
      },
    });
    successCode(res, data, "Lấy dữ liệu thành công");
    return;
  } catch {
    errorCode(res, "Lỗi BE");
  }
};

const getRateOfRes = async (req, res) => {
  let { res_id } = req.params;
  try {
    let data = await models.restaurant.findAll({
      include: ["user_id_user_rate_res"],
      where: {
        res_id,
      },
    });
    successCode(res, data, "Lấy dữ liệu thành công");
    return;
  } catch {
    errorCode(res, "Lỗi BE");
  }
};

export { getLikeOfRes, getRateOfRes };
