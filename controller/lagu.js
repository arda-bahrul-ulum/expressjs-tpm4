import {
  createLagu,
  getLagu,
  updateLagu,
  deleteLagu,
  createUser,
} from "../repositories/lagu.js";
import { responseTemplate } from "../utils/response.js";
import bcrypt from "bcrypt";

export async function controlCreateLAgu(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await createLagu(
      req.body.judul,
      req.body.durasi,
      req.body.is_favorite
    );
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function controlGetLagu(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await getLagu();
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function controlUpdateLagu(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await updateLagu(
      req.params.id,
      req.body.judul,
      req.body.durasi,
      req.body.is_favorite
    );
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function controlDeleteLagu(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await deleteLagu(req.params.id);
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function controlCreateUser(req, res, next) {
  console.log("masuk sini");
  let message;
  let data;
  let response_code;
  try {
    bcrypt.hash(req.body.password, 10, async (error, hashedPass) => {
      data = await createUser(req.body.username, hashedPass);

      if (data > 0) {
        response_code = 200;
        message = "success";
      } else {
        response_code = 500;
        message = "error";
      }
      responseTemplate(res, data, message, response_code);
    });
  } catch (error) {
    next(error);
  }
}

export async function ctrlSelectAllData(req, res, next) {
  data = await selectAllData();
  if (data.length > 0) {
    response_code = 400;
    message = "tidak ada data";
  } else {
    response_code = 200;
    message = "success";
  }
  responseTemplate(res, data, message, response_code);
}
