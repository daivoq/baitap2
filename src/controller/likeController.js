import { Sequelize } from "sequelize";
import initModels from "../model/init-models.js";
import sequelize from "../model/index.js";
import { errorCode, failCode, successCode } from "../config/response.js";

const models = initModels(sequelize);
const Op = Sequelize.Op;

const postLike = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let newData = { user_id, res_id };

    let check = await models.like_res.findAll({
      where: {
        user_id,
        res_id,
      },
    });

    if (check.length > 0) {
      failCode(res, "", "Đã tồn tại");
    } else {
      await models.like_res.create(newData);

      successCode(res, "", "thêm like thành công");
    }

    return;
  } catch {
    errorCode(res, "lỗi BE");
  }
};

const deleteLike = async (req, res) => {
  let { user_id, res_id } = req.params;
  try {
    let check = await models.like_res.findAll({
      where: {
        user_id,
        res_id,
      },
    });

    if (check.length > 0) {
      await models.like_res.destroy({
        where: {
          user_id,
          res_id,
        },
      });

      successCode(res, "", "Xóa thành công");
    } else {
      failCode(res, "", "Không tồn tại");
    }
    return;
  } catch {
    errorCode(res, "lỗi BE");
  }
};

export { postLike, deleteLike };
