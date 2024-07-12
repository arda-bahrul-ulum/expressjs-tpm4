import {
  createLagu,
  getLagu,
  updateLagu,
  deleteLagu,
} from "../repositories/lagu.js";
import { responseTemplate } from "../utils/response.js";

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
