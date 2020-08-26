const resError = require("../response/sendError");
const responseCode = require("../response");
const { keys, pathOr, zipObj } = require("ramda");

const validationMiddleware = (fields, validateFn) => (req, res, next) => {
  const { body } = req;
  const keysRead = keys(fields);
  const valuesRead = keysRead.map((key) => pathOr("", [key], body));

  const userData = zipObj(keysRead, valuesRead);

  const { isError, errors } = validateFn(userData);

  if (isError) {
    return resError(res)(responseCode.error.validationFailed, errors);
  }

  next();
};

module.exports = { validationMiddleware: validationMiddleware };
