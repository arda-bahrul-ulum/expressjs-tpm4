import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { selectData } from "../repositories/auth.js";
import { responseTemplate } from "../utils/response.js";

const access_token_secret = "kelas.com";
const refresh_token_secret = "lagu";

export async function login(req, res, next) {
  try {
    var username = req.body.username;
    let pass = req.body.password;
    let message;
    let status;
    let data = "";
    let dataUser = await selectData(username);

    if (dataUser) {
      bcrypt.compare(pass, dataUser.password, (error, isValid) => {
        if (isValid) {
          let user = {
            id: dataUser.id,
            username: dataUser.username,
            password: dataUser.password,
          };

          let access_token = jwt.sign(user, access_token_secret);
          let refresh_token = jwt.sign(user, refresh_token_secret);

          data = {
            access_token: access_token,
            refresh_token: refresh_token,
          };

          message = "success";
          status = 200;
        } else {
          message = "password atau username tidak sesuai";
          status = 401;
        }
        responseTemplate(res, data, message, status);
      });
    } else {
      message = "nama belum terdaftar";
      status = 400;
      responseTemplate(res, data, message, status);
    }
  } catch (error) {
    next(error);
  }
}

export const tokenValidation = (request, response, next) => {
  try {
    let authToken = request.headers.authorization;
    let accessToken = authToken && authToken.split(" ")[1];
    console.log(accessToken);
    jwt.verify(accessToken, accessToken, (error, payload) => {
      console.log(error);
      console.log(payload);
      if (!error) {
        console.log(payload);
        request.claims = payload;
        next();
      } else {
        responseTemplate(response, "", "token tidak valid", 401);
      }
    });
  } catch (error) {
    next(error);
  }
};
