/*
{
response_code : 200
response_message : "success"
data : "yaa"
}
*/

export function responseTemplate(res, data, message = "error", status = 500) {
  return res.status(status).json({
    response_code: status,
    response_message: message,
    data: data,
  });
}
