import { Sequelize } from "sequelize";
import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";
import { errorCode, failCode, successCode } from "../config/response.js";

const Op = Sequelize.Op;
const models = initModels(sequelize);
const postOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let newData = { user_id, food_id, amount, code, arr_sub_id };

    let check = await models.order.findAll({
      where: {
        user_id,
        food_id,
      },
    });

    if (check.length == 0) {
      await models.order.create(newData);
      successCode(res, "", "Thêm thành công");
      return;
    } else {
      failCode(res, "", "đã tồn tại");
    }
    return;
  } catch {
    errorCode(res, "Lỗi BE");
  }
};

export { postOrder };
