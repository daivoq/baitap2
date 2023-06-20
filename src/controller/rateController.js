import { Sequelize, where } from "sequelize";
import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";
import { errorCode, failCode, successCode } from "../config/response.js";

const models = initModels(sequelize);
const Op = Sequelize.Op;

const postRate = async (req, res) => {
  try {
    let { user_id, res_id, amount } = req.body;

    let newData = { user_id, res_id, amount };

    let check = await models.rate_res.findAll({ where: { user_id, res_id } });

    if (check.length > 0) {
      failCode(res, "", "Đã tồn tại");
    } else {
      await models.rate_res.create(newData);

      successCode(res, "", "Thêm đánh giá thành công");
    }
    return;
  } catch {
    errorCode(res, "Lỗi BE");
  }
};

export { postRate };
