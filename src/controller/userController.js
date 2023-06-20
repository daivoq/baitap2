import { Sequelize } from "sequelize";
import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";
import { errorCode, successCode } from "../config/response.js";

const models = initModels(sequelize);

const Op = Sequelize.Op;
const getLikeOfUser = async (req, res) => {
  let { user_id } = req.params;
  try {
    let data = await models.user.findAll({
      include: ["res_id_restaurants"],
      where: {
        user_id,
      },
    });
    successCode(res, data, "Lấy dữ liệu thành công");
    return;
  } catch {
    errorCode(res, "Lỗi BE");
  }
};

const getRateOfUser = async (req, res) => {
  let { user_id } = req.params;
  try {
    let data = await models.user.findAll({
      include: ["res_id_restaurant_rate_res"],
      where: {
        user_id,
      },
    });
    successCode(res, data, "Lấy dữ liệu thành công");
    return;
  } catch {
    errorCode(res, "Lỗi BE");
  }
};

export { getLikeOfUser, getRateOfUser };
